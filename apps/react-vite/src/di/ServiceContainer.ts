import {InjectorContext, InjectorModule, ProviderWithScope} from "@deepkit/injector";
import {ClassType} from "@deepkit/core";
import {wrapComponent} from "./jsx";

/**
 * Wraps the given component with a new injector context.
 *
 * @example
 * ```typescript
 * export class User {
 *     constructor(public name: string) {
 *     }
 * }
 *
 * const providers: ProviderWithScope[] = [
 *     { provide: User, useValue: new User('Peter') }
 * ];
 *
 * function App(props: {}, user: User) {
 *     console.log('user', user);
 * }
 *
 * ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 *     <React.StrictMode>
 *         <ServiceContainer providers={providers}>
 *             <App/>
 *         </ServiceContainer>
 *     </React.StrictMode>,
 * );
 * ````
 *
 *
 * @param props.providers The providers to use for the new injector context.
 * @param props.module The module to use for the new injector context, instead of providers.
 * @param props.state The state class to use for the new injector context.
 */
export function ServiceContainer(props: { providers?: ProviderWithScope[], module?: InjectorModule, state?: ClassType, children?: any }): any {
  const children = props.children;
  const cacheContainer: any = props.providers || props.module;
  if (!cacheContainer) throw new Error('No providers or module given');
  if (!cacheContainer.__injected) {
    const module = props.module || new InjectorModule(props.providers || []);
    if (props.state) module.setConfigDefinition(props.state);
    const container = new InjectorContext(module);
    cacheContainer.__injected = wrapComponent(children.type, container);
  }

  return {...props.children, type: cacheContainer.__injected};
}