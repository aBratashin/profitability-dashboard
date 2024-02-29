import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface SortItemProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    state: 'selected' | 'default'
}