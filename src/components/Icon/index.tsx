import * as React from 'react';
import './index.css';

interface IProps {
  type: string;
  className?: string;
}

const Icon = ({ type, className }: IProps) => {
  return (
    <svg className={`preview-icon ${className || ''}`} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
};

export default Icon;
