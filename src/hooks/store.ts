import * as React from 'react';
import { IStore, TCtxState } from '../types';

let currentCtx: React.Context<TCtxState> | null = null;

export function useStore() {
  const { state, update: originUpdate } = React.useContext(currentCtx!);

  function update(params: Partial<IStore>) {
    const newState = { ...state, ...params };
    originUpdate(newState);
    return newState;
  }

  return { state, update };
}

export function configStore(ctx: React.Context<TCtxState>) {
  currentCtx = ctx;
}
