import * as React from 'react';
import Dialog from 'rc-dialog';
import { IPreview } from './types';
import Icon from './components/Icon';

import 'rc-dialog/assets/index.css';
import './index.css';

const DialogClassName = 'preview-photo-wrapper';

const imgUrl =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/03/14/MIXOCI5MDSYP4AABAAAAADY8.png?x-oss-process=image/format%2Cwebp';

const PreviewModal = (props: IPreview) => {
  const [visible, setVisible] = React.useState(false);
  const { sources } = props;

  const handleClose = () => {
    setVisible(false);
  };

  console.log(visible);
  return (
    <>
      <button onClick={() => setVisible(true)}>click</button>
      <Dialog
        className={DialogClassName}
        onClose={handleClose}
        visible={true}
        bodyStyle={{ width: 800 }}
        maskStyle={{ backgroundColor: 'rgba(0,0,0,0.80)' }}
        closable={false}
        maskClosable={false}
      >
        <div className="preview-image">
          <img src={imgUrl} alt="image" />
          <div className="zoom-controller">zoom-controller</div>
        </div>
        <div className="left-count">
          <span className="left-count-index">2 </span>/ 20
        </div>
        <div className="description">
          热点图片上限20张，允许热点图片在播放器上进行缩放和拖动，缩放范围：25%-500%；可拖动热点图片上限20张，允许热点图片在播放器上进行缩放和拖动，缩放范围：25%-500%；可拖动热点图片上限20张，允许热点图片在播放器上进行缩放和拖动，缩放范围：25%-500%；热点图片上限20张，允许热点图。
        </div>
        <div className="navigator">
          <div className="arrow prev-arrow">
            <Icon type="icon-preview-photo-arrow-left" />
          </div>
          <ul>
            {sources.map((item) => (
              <li
                key={item.id || item.src}
                className={item.id === '3' ? 'active' : ''}
              >
                <img src={item.src} alt={item.src} />
              </li>
            ))}
          </ul>
          <div className="arrow next-arrow">
            <Icon type="icon-preview-photo-arrow-right" />
          </div>
        </div>
      </Dialog>
    </>
  );
};

const PreviewContainer = (props: React.PropsWithChildren<IPreview>) => {
  const { children, ...restProps } = props;
  return (
    <>
      <PreviewModal {...restProps} />
      {props.children}
    </>
  );
};

export default PreviewContainer;
