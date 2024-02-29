import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface DropdownContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    buttonType: 'manager' | 'project' | 'pay_date';
}