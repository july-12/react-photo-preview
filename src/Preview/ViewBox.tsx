import * as React from 'react';
import { useStore, useZoom } from '../hooks';
import ZoomControler from './ZoomControler';

const ViewBox = () => {
  const { state } = useStore();
  const currentImg = state.getCurrentImg();
  const [wzoom, imgRef, sliderRef] = useZoom();
  return (
    <div className="preview-image">
      <div className="preview-image-box" ref={imgRef}>
        <img src={currentImg?.src} alt="image" />
      </div>
      <ZoomControler wzoom={wzoom} ref={sliderRef} />
    </div>
  );
};

export default ViewBox;
