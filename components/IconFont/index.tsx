/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconFilter from './IconFilter';
import IconSystem from './IconSystem';
import IconDocument from './IconDocument';
import IconFavorite from './IconFavorite';
import IconSmiley from './IconSmiley';
import IconAdjust from './IconAdjust';
import IconSend from './IconSend';
import IconPicture from './IconPicture';

export type IconNames = 'filter' | 'system' | 'document' | 'favorite' | 'smiley' | 'adjust' | 'send' | 'picture';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'filter':
      return <IconFilter {...rest} />;
    case 'system':
      return <IconSystem {...rest} />;
    case 'document':
      return <IconDocument {...rest} />;
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
