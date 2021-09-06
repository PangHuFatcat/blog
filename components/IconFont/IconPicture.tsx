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

const IconPicture: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M439.168 85.333333l160.938667 0.042667c169.088 0.768 224.426667 10.794667 276.053333 62.421333 51.84 51.84 61.312 99.072 62.378667 278.784L938.666667 554.666667c0 205.397333-6.144 260.778667-55.04 313.770666l-7.424 7.722667c-51.84 51.84-99.072 61.312-278.784 62.378667L469.333333 938.666667c-205.397333 0-260.778667-6.144-313.770666-55.04l-7.765334-7.424C94.634667 822.997333 85.589333 765.952 85.333333 584.789333v-145.664c0.256-181.077333 9.301333-238.122667 62.464-291.328C201.002667 94.634667 258.048 85.589333 439.210667 85.333333z m145.664 85.333334l-159.445333 0.042666c-144.64 0.64-188.032 8.234667-217.216 37.461334-30.122667 30.08-37.290667 75.264-37.504 230.997333v145.578667c0.213333 155.818667 7.381333 200.96 37.504 231.082666 29.269333 29.269333 67.669333 36.437333 219.52 37.376L554.666667 853.333333c177.066667 0 224.512-5.12 256.042666-32.682666l5.12-4.821334c29.269333-29.269333 36.437333-67.669333 37.376-219.52L853.333333 469.333333c0-177.066667-5.12-224.512-32.682666-256.042666l-4.821334-5.12c-30.08-30.122667-75.264-37.290667-230.997333-37.504zM344.448 405.930667a128 128 0 0 1 68.138667 13.098666c25.258667 12.672 41.472 34.346667 54.442666 57.429334 12.629333 22.442667 25.386667 52.181333 40.576 87.637333l0.938667 2.218667 2.304 5.290666c7.253333 17.066667 11.605333 27.008 15.317333 33.792l0.512 0.981334 0.853334-0.725334c5.973333-4.949333 13.696-12.586667 26.794666-25.642666l10.922667-10.922667c12.586667-12.544 23.808-23.466667 34.048-32.085333 13.525333-11.392 28.245333-21.418667 46.421333-26.88a128 128 0 0 1 73.898667 0c18.176 5.504 32.853333 15.488 46.421333 26.88 12.8 10.794667 27.136 25.173333 43.733334 41.813333l0.853333 0.853333c0 49.578667-0.384 87.637333-2.346667 118.272l-64.128-64.128c-14.592-14.506667-24.661333-24.405333-33.109333-31.573333-9.301333-7.808-13.653333-9.685333-16.042667-10.410667a42.666667 42.666667 0 0 0-24.661333 0c-2.389333 0.725333-6.741333 2.602667-16.042667 10.453334-9.685333 8.149333-21.461333 19.882667-39.637333 38.058666l-7.978667 7.978667a387.754667 387.754667 0 0 1-24.746666 23.125333c-9.941333 8.192-23.296 17.493333-40.789334 20.522667a85.333333 85.333333 0 0 1-59.648-11.52c-15.104-9.301333-24.064-22.869333-30.293333-34.176-5.845333-10.794667-11.733333-24.576-18.090667-39.424l-0.725333-1.621333-2.261333-5.333334c-16.384-38.186667-27.349333-63.658667-37.461334-81.578666-9.941333-17.706667-15.701333-21.674667-18.346666-22.997334a42.666667 42.666667 0 0 0-22.698667-4.352c-2.944 0.213333-9.728 1.792-25.6 14.506667-16 12.928-35.626667 32.426667-65.024 61.866667l-47.530667 47.530666A9489.066667 9489.066667 0 0 1 213.333333 554.666667v-60.330667c22.528-22.442667 41.898667-41.386667 59.221334-55.338667 20.650667-16.64 43.733333-30.72 71.893333-33.066666zM704 256a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconPicture.defaultProps = {
  size: 18,
};

export default IconPicture;
