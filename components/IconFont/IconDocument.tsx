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

const IconDocument: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M725.333333 128a128 128 0 0 1 128 128v554.666667a128 128 0 0 1-128 128H298.666667a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128z m0 85.333333H298.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v554.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h426.666666a42.666667 42.666667 0 0 0 42.666667-42.666666V256a42.666667 42.666667 0 0 0-42.666667-42.666667z m-170.666666 469.333334a42.666667 42.666667 0 0 1 4.992 85.034666L554.666667 768H384a42.666667 42.666667 0 0 1-4.992-85.034667L384 682.666667h170.666667z m85.333333-170.666667a42.666667 42.666667 0 0 1 4.992 85.034667L640 597.333333H384a42.666667 42.666667 0 0 1-4.992-85.034666L384 512h256z m0-170.666667a42.666667 42.666667 0 0 1 4.992 85.034667L640 426.666667H384a42.666667 42.666667 0 0 1-4.992-85.034667L384 341.333333h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconDocument.defaultProps = {
  size: 18,
};

export default IconDocument;
