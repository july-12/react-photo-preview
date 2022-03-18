import * as React from 'react';
import { useStore } from '../hooks';

const Desc = () => {
  const { state } = useStore();
  const currentImg = state.getCurrentImg();

  return <div className="description">{currentImg?.desc}</div>;
};

export default Desc;
