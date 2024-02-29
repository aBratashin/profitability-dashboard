import {cvaManagerOne, cvaManagerTwo} from '@/features/SortDropdown/SortDropDownStyles';
import {SortCategoriesProps} from '@/entities/SortCategories/SortCategories.props';

export const SortCategories: SortCategoriesProps[] = [
    {id: 1, src: '/img/manager_1.jpg', title: 'manager_1', class: cvaManagerOne()},
    {id: 2, src: '/img/manager_2.jpg', title: 'manager_2', class: cvaManagerTwo()},
];