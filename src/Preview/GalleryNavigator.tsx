import * as React from 'react';
import Icon from '../components/Icon';
import { useStore } from '../hooks';

const GalleryNavigator = () => {
  const {
    state: { sources, currentIndex },
    update,
  } = useStore();
  const switchPicture = (index: number) => {
    update({ currentIndex: index });
  };

  return (
    <div className="navigator">
      <div className="arrow prev-arrow">
        <Icon type="icon-preview-photo-arrow-left" />
      </div>
      <ul>
        {sources?.map((item, index) => (
          <li
            key={item.id || item.src}
            className={index === currentIndex ? 'active' : ''}
          >
            <img
              src={item.src}
              alt={item.src}
              onClick={() => switchPicture(index)}
            />
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
