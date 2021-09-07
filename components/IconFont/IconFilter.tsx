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

const IconFilter: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M810.666667 128l6.4 0.213333a85.333333 85.333333 0 0 1 78.677333 78.421334L896 213.333333v67.669334l-0.341333 7.509333a85.333333 85.333333 0 0 1-19.584 47.274667l-5.077334 5.546666L810.666667 281.002667V213.333333H213.333333v67.669334L401.664 469.333333l5.12 5.546667a85.333333 85.333333 0 0 1 19.541333 47.274667l0.341334 7.509333-0.042667 264.448L597.333333 737.237333v-207.573333l0.341334-7.509333a85.333333 85.333333 0 0 1 19.584-47.274667l5.077333-5.546667L810.666667 281.002667 870.997333 341.333333 682.666667 529.664v222.976l-0.256 5.845333a64 64 0 0 1-37.589334 52.565334l-5.930666 2.304-213.333334 71.082666-5.376 1.578667a64 64 0 0 1-78.592-56.661333L341.333333 823.722667v-294.058667L153.002667 341.333333a85.333333 85.333333 0 0 1-24.661334-52.821333L128 281.002667V213.333333l0.213333-6.4a85.333333 85.333333 0 0 1 78.421334-78.677333L213.333333 128h597.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFilter.defaultProps = {
  size: 18,
};

export default IconFilter;
