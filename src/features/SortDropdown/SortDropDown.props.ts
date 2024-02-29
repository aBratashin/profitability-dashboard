import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {DropdownContentProps} from "@/widgets/DropdownContent/DropdownContent.props";

export interface SortDropDownProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    category: 'manager' | 'project' | 'pay_date';
    itemType: 'all' | 'default';
    index: number;
    isOpen: boolean;
    toggleOpen: (index: number) => void;
    buttonType: DropdownContentProps['buttonType']
}
