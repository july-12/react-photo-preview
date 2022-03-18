import * as React from 'react';
import { useStore } from '../hooks';
const Count = () => {
  const {
    state: { currentIndex, sources },
  } = useStore();
  return (
    <div className="left-count">
      <span className="left-count-index">{currentIndex + 1} </span>/
      {sources?.length || 0}
    </div>
  );
};

export default Count;
