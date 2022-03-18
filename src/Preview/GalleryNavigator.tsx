import * as React from 'react';
import Icon from '../components/Icon';
import { useStore, useForceUpdate } from '../hooks';

// 64: width of img, 18: margin gap
const SCROLL_DISTANCE = (64 + 18) * 10;
const SCROLL_DELAY = 300;
let timer: any;

const GalleryNavigator = () => {
  const ref = React.useRef<HTMLUListElement | null>(null);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const forceUpdate = useForceUpdate();
  const {
    state: { sources, currentIndex },
    update,
  } = useStore();
  const switchPicture = (index: number) => {
    update({ currentIndex: index });
  };

  React.useEffect(() => {
    if (ref.current) {
      setIsScrolling(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, []);

  const scrollTo = React.useCallback(
    (offset) => {
      if (ref.current) {
        ref.current.scrollTo({
          top: 0,
          left: offset,
          behavior: 'smooth',
        });
      }
    },
    [ref.current]
  );
  const scrollPrev = React.useCallback(
    (disabled) => {
      if (!disabled && ref.current) {
        let prevOffsetX = ref.current.scrollLeft - SCROLL_DISTANCE;
        scrollTo(prevOffsetX);
      }
    },
    [ref.current]
  );

  const scrollNext = React.useCallback(
    (disabled) => {
      if (!disabled && ref.current) {
        let nextOffsetX = ref.current.scrollLeft + SCROLL_DISTANCE;
        scrollTo(nextOffsetX);
      }
    },
    [ref.current]
  );

  const shouldDisable = React.useCallback(
    (direction: 'prev' | 'next'): boolean => {
      if (ref.current) {
        return direction === 'prev'
          ? ref.current.scrollLeft === 0
          : ref.current.clientWidth + ref.current.scrollLeft >=
              ref.current.scrollWidth;
      }
      return false;
    },
    [ref.current]
  );

  const handleScroll = () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      forceUpdate();
    }, SCROLL_DELAY);
  };

  const shouldPrevDiabled = shouldDisable('prev');
  const shouldNextDiabled = shouldDisable('next');
  return (
    <div className={`navigator ${isScrolling ? '' : 'navigator-noarrow'}`}>
      <div
        className={`arrow prev-arrow ${
          shouldPrevDiabled ? 'arrow-disabled' : ''
        }`}
        onClick={() => scrollPrev(shouldPrevDiabled)}
      >
        <Icon type="icon-preview-photo-arrow-left" />
      </div>
      <ul ref={ref} onScroll={handleScroll}>
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
      <div
        className={`arrow next-arrow ${
          shouldNextDiabled ? 'arrow-disabled' : ''
        }`}
        onClick={() => scrollNext(shouldNextDiabled)}
      >
        <Icon type="icon-preview-photo-arrow-right" />
      </div>
    </div>
  );
};

export default GalleryNavigator;
