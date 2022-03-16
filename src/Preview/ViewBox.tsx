import * as React from 'react';
import Slider from 'rc-slider';
import Icon from '../components/Icon';
import { useStore } from '../hooks';

import 'rc-slider/assets/index.css';

const ViewBox = () => {
  const { state } = useStore();
  const currentImg = state.getCurrentImg();
  return (
    <div className="preview-image">
      <img src={currentImg?.src} alt="image" />
      <div className="zoom-controller">
        <Icon className="reset" type="icon-preview-photo-filtercenterfocus" />

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
  );
};

export default ViewBox;
