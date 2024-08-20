import {InjectorModule, ProviderWithScope} from "@deepkit/injector";

export interface IReactAppModule {
  allContexts: Map<any, any>;
  providers?: ProviderWithScope[];
  rootModule: InjectorModule;
}