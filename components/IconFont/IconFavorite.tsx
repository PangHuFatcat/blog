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

const IconFavorite: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 262.784l-1.322667-1.962667c-84.906667-121.941333-269.226667-131.541333-364.714666-8.490666l-13.184 17.066666a264.661333 264.661333 0 0 0 27.904 355.114667l296.661333 278.656c16.298667 15.317333 20.522667 18.773333 32.256 23.424a63.957333 63.957333 0 0 0 44.8 0c11.733333-4.608 15.957333-8.106667 32.256-23.424l296.661333-278.656a264.661333 264.661333 0 0 0 27.904-355.157333l-13.226666-17.024c-95.445333-123.050667-279.722667-113.493333-364.672 8.533333L512 262.784z m-59.306667 67.626667c22.912 47.957333 89.386667 49.792 115.626667 5.546666l2.986667-5.546666c45.312-94.976 174.762667-108.885333 239.274666-25.770667l13.226667 17.024 5.632 7.68a179.370667 179.370667 0 0 1-24.533333 232.96L512 837.461333l-292.906667-275.157333a179.328 179.328 0 0 1-18.901333-240.64l13.226667-17.024c64.512-83.114667 193.962667-69.205333 239.317333 25.770667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFavorite.defaultProps = {
  size: 18,
};

export default IconFavorite;
