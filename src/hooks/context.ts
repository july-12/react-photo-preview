import { createContext, useContext } from 'react';

interface ITransform {
  translate: string;
  scale: string;
}
interface IStore {
  currentIndex: number;
  transform?: ITransform;
}

export const initializeStore: IStore = {
  currentIndex: 0,
};

export const ctx = createContext<IStore>(initializeStore);
export function useCtx() {
  return useContext(ctx);
}
