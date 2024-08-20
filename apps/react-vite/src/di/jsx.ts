import {isArray, isFunction} from '@deepkit/core';
import {InjectorContext, Resolver} from '@deepkit/injector';
import {reflect, ReflectionKind} from '@deepkit/type';

export function wrapComponent<T extends Function>(fn: T & { __injected?: any }, container: InjectorContext): any {
  if (fn.__injected) return fn.__injected;

  const type = reflect(fn);
  if (type.kind !== ReflectionKind.function) return fn;

  const args: Resolver<any>[] = [];
  const injector = container.getRootInjector();

  const componentName = fn.name;

  for (let i = 1; i < type.parameters.length; i++) {
    args.push(injector.createResolver(type.parameters[i], undefined, `${componentName}.${type.parameters[i].name}`));
  }

  const fnWithInjected = (props: any) => {
    return fn(props, ...(args.map(v => v())));
  };

  return fn.__injected = function (props: any) {
    const children = fnWithInjected(props);

    const propsChildren: any[] = [];
    let changed = false;

    // console.log('children.props.children', children);
    if ('object' === typeof children && isFunction(children.type)) {
      // NextJS server side has different children return type
      return { ...children, type: wrapComponent(children.type, container) };

    } else if ('object' === typeof children && children.props && isArray(children.props.children)) {
      //that's React in frontend
      for (const child of children.props.children) {
        if ('object' === typeof child && 'function' === typeof child.type) {
          propsChildren.push({ ...child, type: wrapComponent(child.type, container) });
          changed = true;
        } else {
          propsChildren.push(child);
        }
      }

      if (changed) {
        //React freezes the object, so we have to create a new one
        return { ...children, props: { ...children.props, children: propsChildren } };
      }
    }

    return children;
  } as any;
}

