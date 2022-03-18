import * as React from 'react';
import Icon from '../components/Icon';
import { useStore } from '../hooks';

const Navigator = () => {
  const {
    state: { currentIndex, sources },
    update,
  } = useStore();

  const isFirstImg = currentIndex === 0;
  const isLastImg = currentIndex === sources.length - 1;

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
      <div
        className={`photo-arrow photo-arrow-prev ${
          isFirstImg ? 'preview-arrow-disabled' : ''
        }`}
        onClick={handlePrev}
      >
        <Icon type="icon-preview-photo-arrow-left" />
      </div>
      <div
        className={`photo-arrow photo-arrow-next ${
          isLastImg ? 'preview-arrow-disabled' : ''
        }`}
        onClick={handleNext}
      >
        <Icon type="icon-preview-photo-arrow-right" />
      </div>
    </div>
  );
};

export default Navigator;
