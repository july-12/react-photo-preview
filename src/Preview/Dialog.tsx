import * as React from 'react';
import Dialog, { DialogProps } from 'rc-dialog';

import ViewBox from './ViewBox';
import Count from './Count';
import Desc from './Desc';
import GalleryNavigator from './GalleryNavigator';
import Navigator from './Navigator';

import { useStore } from '../hooks';

import 'rc-dialog/assets/index.css';

const DialogClassName = 'preview-photo-wrapper';

const PreviewDialog = (props: DialogProps) => {
  const {
    state: { sources, visible },
  } = useStore();

  const needNavigator = sources?.length > 1;

  return (
    <>
      <Dialog
        className={DialogClassName}
        visible={visible}
        bodyStyle={{ width: 800 }}
        maskStyle={{ backgroundColor: 'rgba(0,0,0,0.80)' }}
        closable={false}
        maskClosable={false}
        {...props}
      >
        {needNavigator && !props.closable && (
          <Navigator onClose={props.onClose} />
        )}
        <ViewBox />
        {needNavigator && <Count />}
        <Desc />
        {needNavigator && <GalleryNavigator />}
      </Dialog>
    </>
  );
};

export default PreviewDialog;
