import React, { FC } from 'react';
import { Categories, DropdownContentProps } from '@/widgets/DropdownContent/DropdownContent.props';
import DropdownItem from '@/widgets/DropdownItem/DropdownItem';
import { cvaButton, cvaContainer, cvaText, cvaType } from './DropdownContentStyles';

const categories: Categories = {
  manager: [
    { id: 1, selected: 'no', category: 'manager', all: 'yes' },
    { id: 2, selected: 'yes', category: 'manager', all: 'no', src: '/img/manager_1.jpg', label: 'Елизавета Которова' },
    { id: 3, selected: 'yes', category: 'manager', all: 'no', src: '/img/manager_2.jpg', label: 'Дмитрий Голиков' },
    { id: 4, selected: 'no', category: 'manager', all: 'no', src: '/img/manager_3.jpg', label: 'Ксения Гривская' },
  ],
  project: [
    { id: 1, selected: 'no', category: 'project', all: 'yes' },
    { id: 2, selected: 'yes', category: 'project', all: 'no', color: 'purple', label: 'Разработка сайта' },
    { id: 3, selected: 'yes', category: 'project', all: 'no', color: 'lightgreen', label: 'Разовые работы' },
    { id: 4, selected: 'no', category: 'project', all: 'no', color: 'red', label: 'T&M' },
    { id: 5, selected: 'no', category: 'project', all: 'no', color: 'blue', label: 'Пакет часов' },
    { id: 6, selected: 'no', category: 'project', all: 'no', color: 'pink', label: 'SEO' },
  ],
  pay_date: [
    { id: 1, selected: 'no', category: 'pay_date', all: 'yes' },
    { id: 2, selected: 'yes', category: 'pay_date', all: 'no', circle_progress: 'full-red', label: 'Просроченные' },
    { id: 3, selected: 'yes', category: 'pay_date', all: 'no', circle_progress: 'half-red', label: 'На этой неделе' },
    {
      id: 4,
      selected: 'no',
      category: 'pay_date',
      all: 'no',
      circle_progress: 'half-yellow',
      label: 'На следующей неделе',
    },
  ],
};

const DropdownContent: FC<DropdownContentProps> = ({ type }) => {
  const categoryData = categories[type] || [];

  return (
    <div className={cvaContainer()}>
      {type &&
        <div className={cvaType()}>
          {categoryData.map(({ id, label, ...restProps }) => (
            <DropdownItem key={id} {...restProps}>
              {label}
            </DropdownItem>
          ))}
        </div>
      }
      <button className={cvaButton()}>Показать <span className={cvaText()}>5</span></button>
    </div>
  );
};

export default DropdownContent;
