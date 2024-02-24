import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { ProgressProps } from '@/components/progress/Progress.props';

export interface CardInfoDownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  price: number;
  remain: number;
  sum: number;
  progressData: ProgressProps[];
}

