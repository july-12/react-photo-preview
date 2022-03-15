import * as React from 'react';
import './index.css';

interface IProps {
  type: string;
}

const Icon = ({ type }: IProps) => {
  return (
    <svg className="preview-icon" aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
};

export default Icon;
