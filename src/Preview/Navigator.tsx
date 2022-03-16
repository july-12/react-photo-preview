import * as React from 'react';
import Icon from '../components/Icon';
import { useStore } from '../hooks';

const Navigator = () => {
  const {
    state: { currentIndex },
    update,
  } = useStore();

  const handlePrev = React.useCallback(() => {
    update({ currentIndex: currentIndex - 1 });
  }, [currentIndex]);

  const handleNext = React.useCallback(() => {
    update({ currentIndex: currentIndex + 1 });
  }, [currentIndex]);

  const handleClose = () => {
    update({ visible: false });
  };
  return (
    <div className="navigator-isolate">
      <div className="preview-close">
        <Icon type="icon-preview-photo-close" onClick={handleClose} />
      </div>
      <div className="photo-arrow photo-arrow-prev">
        <Icon type="icon-preview-photo-arrow-left" onClick={handlePrev} />
      </div>
      <div className="photo-arrow photo-arrow-next">
        <Icon type="icon-preview-photo-arrow-right" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Navigator;
