import React, { FC } from 'react';
import { CategoryProps } from '@/shared/ui/Category/Category.props';
import classNames from 'classnames';
import { cvaContainer, cvaDev, cvaHours, cvaSeo, cvaSup, cvaTm } from './CategoryStyles';
import { getCategoryType } from '@/shared/ui/Category/helpers/CategoryHelpers';

const Category: FC<CategoryProps> = ({ type }) => {

  const textType = getCategoryType(type);

  return (
    <div className={classNames([cvaContainer()], {
      [cvaDev()]: type === 'dev',
      [cvaSup()]: type === 'sup',
      [cvaTm()]: type === 'T&M',
      [cvaHours()]: type === 'hours',
      [cvaSeo()]: type === 'seo',
    })}>
      {textType}
    </div>
  );
};

export default Category;
