import {InjectorContext, InjectorModule, ProviderWithScope} from "@deepkit/injector";
import {IReactAppModule} from "./di/types";
import {Config} from "./services/Config";
import {observer} from "mobx-react";
import {wrapComponent} from "./di/jsx";

export class ReactAppModule implements IReactAppModule {
  allContexts = new Map();
  providers: ProviderWithScope[] = [];
  rootModule: InjectorModule;
  injector: InjectorContext

  constructor() {
    this.providers = [
      Config
    ];

    console.log("Creating ReactAppModule");
    this.rootModule = new InjectorModule(this.providers);
    this.injector = new InjectorContext(this.rootModule);
  }

  trackContext(context: any) {
    this.allContexts.set(context.id, context);
  }

  get contexts() {
    return this.allContexts;
  }

  render() {
    console.log("render");
  }

  withDiRoot<T extends Function>(fn: T): T {
    if(!app) {
      throw new Error("App not initialized yet")
    }

    return wrapComponent(fn, app.injector);
  }
}

let app: ReactAppModule;

export function initApp() {
  if (!app) {
    console.log("initApp");
    app = new ReactAppModule();
  }

  return app;
}

/**
 * If mobx observer in tree, use withDiObs
 * @param fn
 */
export function withDiObs(fn: any) {
  const Wrapped = withDiRoot(fn)
  const Obs = observer(Wrapped)
  return Obs;
}

function withDiRoot<T extends Function>(fn: T): T {
  if(!app) {
    initApp()
  }

  return wrapComponent(fn, app.injector);
}
