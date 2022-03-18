import * as React from 'react';
import { DialogProps } from 'rc-dialog';
import Icon from '../components/Icon';
import { useStore, useKeyBinding } from '../hooks';

type IProps = Pick<DialogProps, 'onClose'>;
const Navigator = (props: IProps) => {
  const { update } = useStore();

  const { isFirstImg, isLastImg, onPrev, onNext } = useKeyBinding();

  const handleClose = (e: React.SyntheticEvent<Element, Event>) => {
    update({ visible: false });
    props.onClose?.(e);
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
        onClick={onPrev}
      >
        <Icon type="icon-preview-photo-arrow-left" />
      </div>
      <div
        className={`photo-arrow photo-arrow-next ${
          isLastImg ? 'preview-arrow-disabled' : ''
        }`}
        onClick={onNext}
      >
        <Icon type="icon-preview-photo-arrow-right" />
      </div>
    </div>
  );
};

export default Navigator;
