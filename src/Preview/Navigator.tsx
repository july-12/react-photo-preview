import * as React from 'react';
import Icon from '../components/Icon';

const Navigator = () => {
  return (
    <>
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

export default Navigator;
