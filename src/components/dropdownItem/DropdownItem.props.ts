import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface DropdownItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: ReactNode,
    selected: 'yes' | 'no',
    category: 'manager' | 'project' | 'pay_date',
    all: 'yes' | 'no',
    color?: 'purple' | 'lightgreen' | 'pink' | 'blue' | 'red',
    manager_id?: 1 | 2 | 3
    circle_progress?: 'half-yellow' | 'half-red' | 'full-red'
}