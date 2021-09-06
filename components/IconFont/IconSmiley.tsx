/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconSmiley: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m121.088 361.984a42.666667 42.666667 0 0 1 15.616 58.282666 157.866667 157.866667 0 0 1-273.408 0 42.666667 42.666667 0 0 1 71.168-46.848l2.730667 4.181334a72.533333 72.533333 0 0 0 121.472 6.4l4.138666-6.4a42.666667 42.666667 0 0 1 58.282667-15.616zM396.8 353.578667a43.178667 43.178667 0 1 1 0 86.4h-38.4a43.178667 43.178667 0 1 1 0-86.357334h38.4z m268.8 0a43.221333 43.221333 0 0 1 0 86.4h-38.4a43.221333 43.221333 0 0 1 0-86.357334h38.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSmiley.defaultProps = {
  size: 18,
};

export default IconSmiley;
