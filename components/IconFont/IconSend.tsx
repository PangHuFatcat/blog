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

const IconSend: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M93.098667 442.24l0.341333 4.522667 0.981333 9.088c7.466667 53.973333 41.088 71.338667 203.093334 121.002666l104.917333 31.829334 12.330667 4.138666c5.162667 1.877333 7.850667 3.157333 9.514666 4.266667l1.152 0.938667 1.28 1.706666c1.621333 2.56 3.712 7.722667 7.253334 18.688l6.058666 19.712 30.250667 99.712 11.477333 36.48c39.978667 124.501333 58.965333 149.717333 110.634667 155.306667l4.266667 0.384c67.712 5.76 84.48-23.04 152.490666-209.152l145.493334-399.786667 12.117333-34.517333c34.133333-99.413333 34.688-129.109333 1.664-164.053333l-3.669333-3.797334c-41.770667-41.728-72.405333-36.906667-214.613334 14.506667L278.186667 303.317333l-46.378667 17.450667C112.170667 366.933333 89.6 387.712 93.098667 442.24z m218.026666-60.117333l416.085334-151.509334c88.448-31.658667 112.554667-36.181333 117.162666-31.573333l0.853334 1.365333 0.554666 2.133334c1.365333 10.112-6.656 40.874667-36.565333 123.776L661.333333 732.288l-18.090666 47.402667c-25.728 65.877333-36.778667 85.504-39.338667 85.333333l-1.194667-1.408-1.962666-2.773333a164.352 164.352 0 0 1-11.008-20.48l-5.717334-12.928-3.925333-9.6c-7.168-18.346667-14.933333-41.813333-27.52-82.602667l-33.578667-110.72c-11.136-36.565333-17.493333-51.072-33.237333-66.816a90.453333 90.453333 0 0 0-5.76-5.290667l-6.656-5.248c-10.922667-7.936-22.101333-12.586667-46.762667-20.309333l-143.061333-43.648-26.88-8.746667a548.266667 548.266667 0 0 1-42.965333-16l-4.992-2.176c-23.765333-10.581333-30.208-16.512-30.208-16.768l0.341333-0.768 1.28-1.194666c7.296-5.76 40.96-21.888 131.072-55.424z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSend.defaultProps = {
  size: 18,
};

export default IconSend;
