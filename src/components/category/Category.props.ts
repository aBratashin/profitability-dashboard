import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface CategoryProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    color: 'purple' | 'lightgreen' | 'progressRed' | 'blue' | 'pink'
}