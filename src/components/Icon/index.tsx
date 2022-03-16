import * as React from 'react';
import './index.css';

interface IProps extends React.SVGProps<SVGElement> {
  type: string;
}

const Icon = React.forwardRef<SVGSVGElement, IProps>((props, ref) => {
  const { children, type, className = '', ...restProps } = props;

  return (
    <svg
      {...restProps}
      className={`preview-icon ${className}`}
      aria-hidden="true"
      ref={ref}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  );
});

export default Icon;
