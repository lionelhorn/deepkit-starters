import {makeObservable, observable, runInAction} from "mobx";
import {createContext, useContext} from "react";

export class Ticker {
  count: number = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
    })

    this.startTicker()
  }

  startTicker() {
    setInterval(() => {
      runInAction(() => {
        this.count += 1
      });
    }, 1000)
  }
}

export const TickerContext = createContext<Ticker>(new Ticker())


export function useTicker() {
  const context = useContext(TickerContext)

  if(!context) {
    throw Error("useTicker must be used inside a TickerContext");
  }

  return context
}