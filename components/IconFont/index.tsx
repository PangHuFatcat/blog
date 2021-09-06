/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconFavorite from './IconFavorite';
import IconSmiley from './IconSmiley';
import IconAdjust from './IconAdjust';
import IconSend from './IconSend';
import IconPicture from './IconPicture';

export type IconNames = 'favorite' | 'smiley' | 'adjust' | 'send' | 'picture';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'favorite':
      return <IconFavorite {...rest} />;
    case 'smiley':
      return <IconSmiley {...rest} />;
    case 'adjust':
      return <IconAdjust {...rest} />;
    case 'send':
      return <IconSend {...rest} />;
    case 'picture':
      return <IconPicture {...rest} />;

  }

  return null;
};

export default IconFont;
