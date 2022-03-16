import * as React from 'react';
import { IPreviewProps } from './types';
import { createCtx } from './context';

import { PreviewDialog } from './Preview';

const PreviewApp = (props: React.PropsWithChildren<IPreviewProps>) => {
  const { children, sources, defaultCurrentIndex, ...restProps } = props;

  const [Provider] = createCtx({
    sources,
    currentIndex: defaultCurrentIndex,
  });

  return (
    <Provider>
      <PreviewDialog {...restProps} />
      {children}
    </Provider>
  );
};

PreviewApp.defaultProps = {
  sources: [],
  defaultCurrentIndex: 0,
};

export default PreviewApp;
