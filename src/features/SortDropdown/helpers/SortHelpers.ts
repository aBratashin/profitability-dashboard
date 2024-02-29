import {SortDropDownProps} from '@/features/SortDropdown/SortDropDown.props';

export const getSortDropDownType = (category: SortDropDownProps['category']) => {
    if (category === 'manager') {
        return 'Менеджеры';
    } else if (category === 'project') {
        return 'Тип проекта';
    } else if (category === 'pay_date') {
        return 'Дата оплаты';
    }
};