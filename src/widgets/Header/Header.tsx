import React from 'react';
import Search from '@/features/Search/Search';
import SortDropDown from '@/features/SortDropdown/SortDropDown';
import ClearButton from "@/features/Button/ClearButton/ClearButton";
import {cvaContainer, cvaHeaderTitle, cvaHeaderWrapper} from "@/widgets/Header/HeaderStyles";

const Header = () => {
    return (
        <div className={cvaContainer()}>
            <div>
                <h1 className={cvaHeaderTitle()}>Рентабельность</h1>
            </div>
            <div className={cvaHeaderWrapper()}>
                <Search placeholder="Найти проект"/>
                <SortDropDown category="manager" itemType={'all'}/>
                <SortDropDown category="project" itemType={'all'}/>
                <SortDropDown category="pay_date" itemType={'all'}/>
                <ClearButton/>
            </div>
        </div>
    );
};

export default Header;
