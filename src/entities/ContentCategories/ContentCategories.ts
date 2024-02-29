import {ContentCategoriesProps} from './ContentCategories.props';

export const ContentCategories: ContentCategoriesProps = {
    manager: [
        {id: 1, selected: 'no', category: 'manager', all: 'yes'},
        {
            id: 2,
            selected: 'yes',
            category: 'manager',
            all: 'no',
            src: '/img/manager_1.jpg',
            label: 'Елизавета Которова'
        },
        {id: 3, selected: 'yes', category: 'manager', all: 'no', src: '/img/manager_2.jpg', label: 'Дмитрий Голиков'},
        {id: 4, selected: 'no', category: 'manager', all: 'no', src: '/img/manager_3.jpg', label: 'Ксения Гривская'},
    ],
    project: [
        {id: 1, selected: 'no', category: 'project', all: 'yes'},
        {id: 2, selected: 'yes', category: 'project', all: 'no', color: 'purple', label: 'Разработка сайта'},
        {id: 3, selected: 'yes', category: 'project', all: 'no', color: 'lightgreen', label: 'Разовые работы'},
        {id: 4, selected: 'no', category: 'project', all: 'no', color: 'red', label: 'T&M'},
        {id: 5, selected: 'no', category: 'project', all: 'no', color: 'blue', label: 'Пакет часов'},
        {id: 6, selected: 'no', category: 'project', all: 'no', color: 'pink', label: 'SEO'},
    ],
    pay_date: [
        {id: 1, selected: 'no', category: 'pay_date', all: 'yes'},
        {id: 2, selected: 'yes', category: 'pay_date', all: 'no', circle_progress: 'full-red', label: 'Просроченные'},
        {id: 3, selected: 'yes', category: 'pay_date', all: 'no', circle_progress: 'half-red', label: 'На этой неделе'},
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