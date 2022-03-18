import { useMemo, useEffect, useCallback } from 'react';
import { useStore } from '.';

enum KEY_CODE {
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
}
export function useKeyBinding() {
  const {
    state: { visible, currentIndex, sources },
    update,
  } = useStore();

  const isFirstImg = useMemo(() => currentIndex === 0, [currentIndex]);
  const isLastImg = useMemo(
    () => currentIndex === sources.length - 1,
    [currentIndex]
  );

  const onPrev = useCallback(() => {
    if (!isFirstImg) {
      update({ currentIndex: currentIndex - 1 });
    }
  }, [currentIndex, isFirstImg]);

  const onNext = useCallback(() => {
    if (!isLastImg) {
      update({ currentIndex: currentIndex + 1 });
    }
  }, [currentIndex, isLastImg]);

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case KEY_CODE.LEFT:
        case KEY_CODE.UP:
          onPrev();
          break;
        case KEY_CODE.RIGHT:
        case KEY_CODE.DOWN:
          onNext();
          break;
        default:
          break;
      }
    },
    [onPrev, onNext]
  );

  useEffect(() => {
    if (!visible) return;

    document.addEventListener('keyup', handleKeyEvent);

    return () => document.removeEventListener('keyup', handleKeyEvent);
  }, [visible, handleKeyEvent]);

  return {
    isFirstImg,
    isLastImg,
    onPrev,
    onNext,
  };
}
