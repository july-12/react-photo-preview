import * as React from 'react';
import Dialog from 'rc-dialog';
import ViewBox from './ViewBox';
import Count from './Count';
import Desc from './Desc';
import GalleryNavigator from './GalleryNavigator';
import Navigator from './Navigator';

import 'rc-dialog/assets/index.css';

const DialogClassName = 'preview-photo-wrapper';

const PreviewDialog = () => {
  const [visible, setVisible] = React.useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  console.log(visible);
  return (
    <>
      <Dialog
        className={DialogClassName}
        onClose={handleClose}
        visible={true}
        bodyStyle={{ width: 800 }}
        maskStyle={{ backgroundColor: 'rgba(0,0,0,0.80)' }}
        closable={false}
        maskClosable={false}
      >
        <ViewBox />
        <Count />
        <Desc />
        <GalleryNavigator />
      </Dialog>
      <Navigator />
    </>
  );
};

export default PreviewDialog;
