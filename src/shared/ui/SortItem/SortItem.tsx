import React, { FC } from 'react';
import { SortItemProps } from '@/shared/ui/SortItem/SortItem.props';
import classNames from 'classnames';
import { cvaButtonContainer, cvaTransparent, cvaWhite } from '@/shared/ui/SortItem/SortItemStyles';

const SortItem: FC<SortItemProps> = ({ state, children }) => {
  return (
    <button className={classNames([cvaButtonContainer()], {
      [cvaWhite()]: state === 'selected',
      [cvaTransparent()]: state === 'default',
    })}>
      {children}
    </button>
  );
};

export default SortItem;