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

const IconAdjust: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M725.333333 512a170.666667 170.666667 0 1 1-165.290666 213.333333H170.666667a42.666667 42.666667 0 0 1-4.992-85.034666L170.666667 640h389.376c18.944-73.6 85.76-128 165.290666-128z m0 85.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667zM298.666667 170.666667a170.752 170.752 0 0 1 165.376 128.298666h0.298666L469.333333 298.666667h384a42.666667 42.666667 0 0 1 4.992 85.034666L853.333333 384h-384a43.093333 43.093333 0 0 1-5.333333-0.341333A170.666667 170.666667 0 1 1 298.666667 170.666667z m0 85.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconAdjust.defaultProps = {
  size: 18,
};

export default IconAdjust;
