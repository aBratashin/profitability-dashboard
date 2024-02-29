import {DropdownItemProps} from '@/widgets/DropdownItem/DropdownItem.props';

interface CommonCategoryProps {
    id: number;
    selected: DropdownItemProps['selected'];
    all: DropdownItemProps['all'];
    label?: string;
}

interface ManagerCategory extends CommonCategoryProps {
    category: 'manager';
    src?: DropdownItemProps['src'];
}

interface ProjectCategory extends CommonCategoryProps {
    category: 'project';
    color?: DropdownItemProps['color'];
}

interface PayDateCategory extends CommonCategoryProps {
    category: 'pay_date';
    circle_progress?: DropdownItemProps['circle_progress'];
}

export interface ContentCategoriesProps {
    manager: ManagerCategory[];
    project: ProjectCategory[];
    pay_date: PayDateCategory[];
}
