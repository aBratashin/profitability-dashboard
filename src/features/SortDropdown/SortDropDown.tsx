'use client'

import React, { FC, useState, useCallback } from 'react';
import { SortDropDownProps } from '@/features/SortDropdown/SortDropDown.props';
import Image from 'next/image';
import HalfRed from '/public/img/half-red.svg';
import FullRed from '/public/img/full-red.svg';
import {
  cvaAll,
  cvaButtonContainer,
  cvaLightgreen,
  cvaManager,
  cvaPayDate,
  cvaPayDateImg,
  cvaProject,
  cvaPurple,
} from '@/features/SortDropdown/SortDropDownStyles';
import ArrowDownGray from '@/shared/ui/Arrow/ArrowDownGray/ArrowDownGray';
import { SortCategories } from '@/entities/SortCategories/SortCategories';
import { getSortDropDownType } from '@/features/SortDropdown/helpers/SortHelpers';
import DropdownContent from '@/widgets/DropdownContent/DropdownContent';

const SortDropDown: FC<SortDropDownProps> = ({ category, itemType, index, isOpen, toggleOpen }) => {
  const textType = getSortDropDownType(category);
  const [localIsOpen, setLocalIsOpen] = useState(false);

  const handleClick = () => {
    toggleOpen(index);
    setLocalIsOpen(!localIsOpen);
  };

  return (
    <button
      onClick={handleClick}
      className={cvaButtonContainer()}
      style={{ borderColor: '#e4e4e4', position: 'relative' }}
    >
      {itemType === 'all' && <div className={cvaAll()}><span>Все</span></div>}

      {category === 'manager' && itemType === 'default' &&
        <div className={cvaManager()}>
          {SortCategories.map(el => (
            <Image
              key={el.id}
              src={el.src}
              width={24}
              height={24}
              alt={el.title}
              loading={'eager'}
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
      {isOpen && (
        <div style={{ position: 'absolute', top: 80, left: -60 }}>
          <DropdownContent type={'manager'} />
        </div>
      )}
    </button>
  );
};

export default SortDropDown;
