import * as React from 'react';
import { IStore, TStoreUpdateType } from './types';
import { configStore } from './hooks/store';

export const defaultValue: IStore = {
  currentIndex: 0,
  getCurrentImg() {
    return this.sources?.[this.currentIndex];
  },
  sources: [],
};

export type TUpdateType<T> = React.Dispatch<React.SetStateAction<T>>;

export function createCtx(params?: Partial<IStore>) {
  const initialValue = { ...defaultValue, ...params };
  const defaultUpdate: TStoreUpdateType = () => initialValue;

  const ctx = React.createContext({
    state: initialValue,
    update: defaultUpdate,
  });

  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = React.useState(initialValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }

  configStore(ctx);

  return [Provider] as const;
}
