import * as React from 'react';
import Slider from 'rc-slider';
import Icon from '../components/Icon';
import { useStore, useZoom } from '../hooks';

import 'rc-slider/assets/index.css';

interface IZoomControlerPropsl {
  wzoom: any;
}
const ZoomControler = React.forwardRef(
  ({ wzoom }: IZoomControlerPropsl, ref) => {
    const [sliderValue, setSliderValue] = React.useState(1);

    React.useImperativeHandle(ref, () => ({
      changeSlider: (value: number) => setSliderValue(value),
    }));

    const zoomReset = React.useCallback(() => {
      wzoom?.prepare();
    }, [wzoom]);

    const zoomIn = React.useCallback(() => {
      if (wzoom.content.currentScale + 0.25 <= 5) {
        wzoom?.zoomUp?.();
      }
    }, [wzoom]);

    const zoomOut = React.useCallback(() => {
      if (wzoom.content.currentScale - 0.25 >= 0.1) {
        wzoom?.zoomDown?.();
      }
    }, [wzoom]);

    return (
      <div className="zoom-controller">
        <Icon
          className="reset"
          type="icon-preview-photo-filtercenterfocus"
          onClick={zoomReset}
        />

        <div className="zoom-slider">
          <Icon type="icon-preview-photo-zoomout" onClick={zoomOut} />
          <Slider
            min={0.1}
            defaultValue={1}
            max={5}
            step={0.25}
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
            value={sliderValue}
            onChange={(value) => {
              setSliderValue(value as number);
              wzoom?._zoom(value);
            }}
          />

          <Icon type="icon-preview-photo-zoomin" onClick={zoomIn} />
        </div>
      </div>
    );
  }
);
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
