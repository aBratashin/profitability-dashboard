import React, { FC } from 'react';
import { managerProps, SortDropDownProps } from '@/features/SortDropdown/SortDropDown.props';
import Image from 'next/image';
import HalfRed from '/public/img/half-red.svg';
import FullRed from '/public/img/full-red.svg';
import {
  cvaAll,
  cvaButtonContainer,
  cvaLightgreen,
  cvaManager,
  cvaManagerOne,
  cvaManagerTwo,
  cvaPayDate,
  cvaPayDateImg,
  cvaProject,
  cvaPurple,
} from '@/features/SortDropdown/SortDropDownStyles';
import ArrowDownGray from '@/shared/ui/Arrow/ArrowDownGray/ArrowDownGray';

const getSortDropDownType = (category: SortDropDownProps['category']) => {
  if (category === 'manager') {
    return 'Менеджеры';
  } else if (category === 'project') {
    return 'Тип проекта';
  } else if (category === 'pay_date') {
    return 'Дата оплаты';
  }
};

const managerImages: managerProps[] = [
  { id: 1, src: '/img/manager_1.jpg', title: 'manager_1', class: cvaManagerOne() },
  { id: 2, src: '/img/manager_2.jpg', title: 'manager_2', class: cvaManagerTwo() },
];

const SortDropDown: FC<SortDropDownProps> = ({ category, itemType }) => {

  const textType = getSortDropDownType(category);

  return (
    <button
      className={cvaButtonContainer()}
      style={{ borderColor: '#e4e4e4' }}
    >
      {itemType === 'all' && <div
        className={cvaAll()}>
        <span>Все</span>
      </div>}

      {category === 'manager' && itemType === 'default' &&
        <div className={cvaManager()}>
          {managerImages.map(el => (
            <Image
              key={el.id}
              src={el.src}
              width={24}
              height={24}
              alt={el.title}
              className={el.class}
            />
          ))}
        </div>}

      {category === 'project' && itemType === 'default' &&
        <div className={cvaProject()}>
          <div className={cvaPurple()}></div>
          <div className={cvaLightgreen()}></div>
        </div>}

      {category === 'pay_date' && itemType === 'default' &&
        <div className={cvaPayDate()}>
          <HalfRed className={cvaPayDateImg()} />
          <FullRed className={cvaPayDateImg()} />
        </div>}
      {textType}
      <ArrowDownGray />
    </button>
  );
};

export default SortDropDown;