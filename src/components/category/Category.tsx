import React, { FC } from 'react';
import { CategoryProps } from '@/components/category/Category.props';
import classNames from 'classnames';

const getCategoryType = (type: CategoryProps['type']) => {
  if (type === 'dev') {
    return 'Разработка сайта';
  } else if (type === 'sup') {
    return 'Разовые работы';
  } else if (type === 'T&M') {
    return 'T&M';
  } else if (type === 'hours') {
    return 'Пакет часов';
  } else if (type === 'seo') {
    return 'SEO';
  }
};

const Category: FC<CategoryProps> = ({ type }) => {

  const textType = getCategoryType(type);

  return (
    <div className={classNames(['px-3 py-1 rounded-2xl border-2 font-medium'], {
      ['border-purple text-purple']: type === 'dev',
      ['border-lightgreen text-lightgreen']: type === 'sup',
      ['border-progressRed text-red']: type === 'T&M',
      ['border-blue text-blue']: type === 'hours',
      ['border-pink text-pink']: type === 'seo',
    })}>
      {textType}
    </div>
  );
};

export default Category;
