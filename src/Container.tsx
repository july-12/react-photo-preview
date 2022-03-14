import * as React from 'react';
import Dialog from 'rc-dialog';
import { IPreview } from './types';

import 'rc-dialog/assets/index.css';
import './index.css';

const DialogClassName = 'preview-photo-wrapper';

const imgUrl =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/03/14/MIXOCI5MDSYP4AABAAAAADY8.png?x-oss-process=image/format%2Cwebp';
const PreviewModal = () => {
  const [visible, setVisible] = React.useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  console.log(visible);
  return (
    <>
      <button onClick={() => setVisible(true)}>click</button>
      <Dialog
        prefixCls="rpp"
        className={DialogClassName}
        onClose={handleClose}
        visible={true}
        bodyStyle={{ width: 800, height: 560 }}
        closable={false}
        maskClosable={false}
      >
        <div className="preview-image">
          <img src={imgUrl} alt="image" />
          <div className="zoom-controller">zoom-controller</div>
        </div>
        <div className="left-count">2 / 20</div>
        <div className="description">
          热点图片上限20张，允许热点图片在播放器上进行缩放和拖动，缩放范围：25%-500%；可拖动热点图片上限20张，允许热点图片在播放器上进行缩放和拖动，缩放范围：25%-500%；可拖动热点图片上限20张，允许热点图片在播放器上进行缩放和拖动，缩放范围：25%-500%；热点图片上限20张，允许热点图。
        </div>
        <div className="navigator">navigator</div>
      </Dialog>
    </>
  );
};

const PreviewContainer = (props: React.PropsWithChildren<IPreview>) => {
  return (
    <div>
      <PreviewModal />
      {props.children}
      hahaha
    </div>
  );
};

export default PreviewContainer;
