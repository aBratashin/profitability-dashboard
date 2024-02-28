import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface SortDropDownProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  category: 'manager' | 'project' | 'pay_date';
  itemType: 'all' | 'default';
}

export interface DropDownItem {
  id: number;
  category: 'manager' | 'project' | 'pay_date';
  itemType: 'all';
}

export interface managerProps {
  id: number;
  src: string,
  title: string,
  class: string
}