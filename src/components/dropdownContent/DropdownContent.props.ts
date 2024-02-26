import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DropdownContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'manager' | 'project' | 'pay_date';
}