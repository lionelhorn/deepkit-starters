import {InjectorContext, ProviderWithScope} from "@deepkit/injector";
import {wrapComponent} from "./jsx";

export function withDi(fn: any, providers: ProviderWithScope[]): any {
  const container = InjectorContext.forProviders(providers)
  return wrapComponent(fn, container)
}

export function assertDi<T>(obj: any) {
  if (!obj) {
    throw Error(`DI dep not injected properly: "${JSON.stringify(obj)}"`)
  }
}

