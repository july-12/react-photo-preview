import * as React from 'react';
import Dialog from 'rc-dialog';
import Slider from 'rc-slider';
import { IPreview } from './types';
import Icon from './components/Icon';
import 'rc-slider/assets/index.css';

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
          <div className="zoom-controller">
            <Icon
              className="reset"
              type="icon-preview-photo-filtercenterfocus"
            />

            <div className="zoom-slider">
              <Icon type="icon-preview-photo-zoomout" />
              <Slider
                min={0.1}
                defaultValue={1}
                max={5}
                step={0.1}
                railStyle={{
                  background: 'rgba(255,255,255,0.16)',
                  height: 2,
                }}
                trackStyle={{ backgroundColor: '#338BFF', height: 2 }}
                handleStyle={{
                  backgroundColor: '#338BFF',
                  opacity: 1,
                  border: '3px solid #fff',
                  height: 12,
                  width: 12,
                }}
              />

              <Icon type="icon-preview-photo-zoomin" />
            </div>
          </div>
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
      <div className="preview-close">
        <Icon type="icon-preview-photo-close" />
      </div>
      <div className="photo-arrow photo-arrow-prev">
        <Icon type="icon-preview-photo-arrow-left" />
      </div>
      <div className="photo-arrow photo-arrow-next">
        <Icon type="icon-preview-photo-arrow-right" />
      </div>
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
