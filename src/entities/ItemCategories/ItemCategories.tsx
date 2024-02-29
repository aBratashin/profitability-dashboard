import {
    cvaCategoryPaydateImg,
    cvaCategoryProjectBlue,
    cvaCategoryProjectLightgreen,
    cvaCategoryProjectPink,
    cvaCategoryProjectPurple,
    cvaCategoryProjectRed,
} from '@/widgets/DropdownItem/DropdownItemStyles';
import HalfYellow from '/public/img/half-yellow.svg';
import HalfRed from '/public/img/half-red.svg';
import FullRed from '/public/img/full-red.svg';
import React from 'react';
import {ItemCategoriesProps} from './ItemCategories.props';

export const ItemCategories: ItemCategoriesProps = {
    manager: [
        {id: 1, src: '/img/manager_1.jpg', title: 'manager_1'},
        {id: 2, src: '/img/manager_2.jpg', title: 'manager_2'},
        {id: 3, src: '/img/manager_3.jpg', title: 'manager_3'},
    ],
    project: [
        {id: 1, item: <div className={cvaCategoryProjectPurple()}></div>, title: 'project_1'},
        {id: 2, item: <div className={cvaCategoryProjectLightgreen()}></div>, title: 'project_2'},
        {id: 3, item: <div className={cvaCategoryProjectPink()}></div>, title: 'project_3'},
        {id: 4, item: <div className={cvaCategoryProjectBlue()}></div>, title: 'project_4'},
        {id: 5, item: <div className={cvaCategoryProjectRed()}></div>, title: 'project_5'},
    ],
    payDate: [
        {id: 1, item: <HalfYellow className={cvaCategoryPaydateImg()}/>, title: 'payDate_1'},
        {id: 2, item: <HalfRed className={cvaCategoryPaydateImg()}/>, title: 'payDate_2'},
        {id: 3, item: <FullRed className={cvaCategoryPaydateImg()}/>, title: 'payDate_3'},
    ],
};