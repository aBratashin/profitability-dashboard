import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CategoryProps } from '@/shared/ui/Category/Category.props';

export interface CardInfoUpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  type: CategoryProps['type'];
  month: 'Декабрь' | 'Январь' | 'Февраль' | 'Март' | 'Апрель' | 'Май' | 'Июнь' | 'Июль' | 'Август' | 'Сентябрь' | 'Октябрь' | 'Ноябрь';
  src: string | undefined;
  year: number;
}