import * as React from 'react';
import { IPreview } from './types';
import { ctx, initializeStore } from './hooks';

import { PreviewDialog } from './PreviewContainer';

const PreviewContainer = (props: React.PropsWithChildren<IPreview>) => {
  const { children, ...restProps } = props;
  return (
    <ctx.Provider value={initializeStore}>
      <PreviewDialog {...restProps} />
      {props.children}
    </ctx.Provider>
  );
};

export default PreviewContainer;
