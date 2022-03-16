import * as React from 'react';
import { IPreviewProps } from './types';
import { createCtx } from './context';

import { PreviewDialog } from './Preview';

const PreviewApp = (props: React.PropsWithChildren<IPreviewProps>) => {
  const { children, sources, defaultCurrentIndex } = props;

  const [Provider] = createCtx({ sources, currentIndex: defaultCurrentIndex });

  return (
    <Provider>
      <PreviewDialog />
      {children}
    </Provider>
  );
};

PreviewApp.defaultProps = {
  defaultCurrentIndex: 0,
};

export default PreviewApp;
