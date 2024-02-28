import React from 'react';
import Search from '@/features/Search/Search';
import SortDropDown from '@/features/SortDropdown/SortDropDown';
import ClearButton from '@/features/Button/ClearButton/ClearButton';
import { cvaContainer, cvaHeaderTitle, cvaHeaderWrapper } from '@/widgets/Header/HeaderStyles';
import { DropDownItem } from '@/features/SortDropdown/SortDropDown.props';

const DropDownData: DropDownItem[] = [
  { id: 1, category: 'manager', itemType: 'all' },
  { id: 2, category: 'project', itemType: 'all' },
  { id: 3, category: 'pay_date', itemType: 'all' },
];

const Header = () => {
  return (
    <div className={cvaContainer()}>
      <div>
        <h1 className={cvaHeaderTitle()}>Рентабельность</h1>
      </div>
      <div className={cvaHeaderWrapper()}>
        <Search placeholder="Найти проект" />
        {DropDownData.map(({ id, ...restProps }) => (
          <SortDropDown key={id} {...restProps} />
        ))}
        <ClearButton />
      </div>
    </div>
  );
};

export default Header;
