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

const IconSearch: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M488.021333 128a359.978667 359.978667 0 0 1 284.074667 581.162667l154.325333 156.928a42.666667 42.666667 0 0 1-56.874666 63.402666l-3.968-3.584-153.557334-156.074666A359.978667 359.978667 0 1 1 488.021333 128z m0 85.333333a274.645333 274.645333 0 1 0 0 549.333334 274.645333 274.645333 0 0 0 0-549.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSearch.defaultProps = {
  size: 18,
};

export default IconSearch;
