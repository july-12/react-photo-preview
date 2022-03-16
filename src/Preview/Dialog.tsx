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
    state: { visible },
    update,
  } = useStore();

  const handleClose = () => {
    update({ visible: false });
  };

  return (
    <>
      <Dialog
        className={DialogClassName}
        onClose={handleClose}
        visible={visible}
        bodyStyle={{ width: 800 }}
        maskStyle={{ backgroundColor: 'rgba(0,0,0,0.80)' }}
        closable={false}
        maskClosable={false}
        {...props}
      >
        <ViewBox />
        <Count />
        <Desc />
        <Navigator />
        <GalleryNavigator />
      </Dialog>
    </>
  );
};

export default PreviewDialog;
