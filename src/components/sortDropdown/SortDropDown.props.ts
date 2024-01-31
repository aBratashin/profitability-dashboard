import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface SortDropDownProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    category: 'manager' | 'project' | 'pay_date'
    itemType: 'all' | 'default'
}