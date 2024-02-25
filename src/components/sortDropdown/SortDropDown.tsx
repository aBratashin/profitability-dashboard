import React, { FC } from 'react';
import { SortDropDownProps } from '@/components/sortDropdown/SortDropDown.props';
import Image from 'next/image';
import HalfRed from '/public/img/half-red.svg';
import FullRed from '/public/img/full-red.svg';
import ArrowDown from '/public/img/arrow-down.svg';
import {
  cvaAll,
  cvaArrow,
  cvaButtonContainer,
  cvaLightgreen,
  cvaManager,
  cvaManagerOne,
  cvaManagerTwo,
  cvaPayDate,
  cvaPayDateImg,
  cvaProject,
  cvaPurple,
} from '@/components/sortDropdown/SortDropDownStyles';

const getSortDropDownType = (category: SortDropDownProps['category']) => {
  if (category === 'manager') {
    return 'Менеджеры';
  } else if (category === 'project') {
    return 'Тип проекта';
  } else if (category === 'pay_date') {
    return 'Дата оплаты';
  }
};

const SortDropDown: FC<SortDropDownProps> = ({ category, itemType }) => {

  const textType = getSortDropDownType(category);

  return (
    <button
      className={cvaButtonContainer()}
    >
      {itemType === 'all' && <div
        className={cvaAll()}>
        <span>Все</span>
      </div>}

      {category === 'manager' && itemType === 'default' &&
        <div className={cvaManager()}>
          <Image
            src="/img/manager_1.jpg"
            width={24}
            height={24}
            alt="manager_1"
            className={cvaManagerOne()}
          />
          <Image
            src="/img/manager_2.jpg"
            width={24}
            height={24}
            alt="manager_2"
            className={cvaManagerTwo()}
          />
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
      <ArrowDown className={cvaArrow()} />
    </button>
  );
};

export default SortDropDown;