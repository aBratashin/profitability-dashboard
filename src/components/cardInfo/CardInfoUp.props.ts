import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CategoryProps } from '@/components/category/Category.props';
import { DropdownItemProps } from '@/components/dropdownItem/DropdownItem.props';

export interface CardInfoUpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  type: CategoryProps['type'];
  month: 'Декабрь' | 'Январь' | 'Февраль' | 'Март' | 'Апрель' | 'Май' | 'Июнь' | 'Июль' | 'Август' | 'Сентябрь' | 'Октябрь' | 'Ноябрь';
  manager_id: DropdownItemProps['manager_id'];
  year: number;
}