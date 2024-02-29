'use client'

import React, { useState } from 'react';
import Search from '@/features/Search/Search';
import SortDropDown from '@/features/SortDropdown/SortDropDown';
import ClearButton from '@/features/Button/ClearButton/ClearButton';
import { cvaContainer, cvaHeaderTitle, cvaHeaderWrapper } from '@/widgets/Header/HeaderStyles';
import { HeaderCategories } from '@/entities/HeaderCategories/HeaderCategories';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(null);

  const toggleOpen = (index) => {
    if (modalOpen === index) {
      setModalOpen(null);
    } else {
      setModalOpen(index);
    }
  };

  return (
    <div className={cvaContainer()}>
      <div>
        <h1 className={cvaHeaderTitle()}>Рентабельность</h1>
      </div>
      <div className={cvaHeaderWrapper()}>
        <Search placeholder="Найти проект" />
        {HeaderCategories.map(({ id, ...restProps }) => (
          <SortDropDown key={id} index={id} isOpen={modalOpen === id} toggleOpen={toggleOpen} {...restProps} />
        ))}
        <ClearButton />
      </div>
    </div>
  );
};

export default Header;
