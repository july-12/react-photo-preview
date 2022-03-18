import * as React from 'react';
import Icon from '../components/Icon';

const GalleryNavigator = () => {
  const sources: any[] = [];

  return (
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
  );
};

export default GalleryNavigator;
