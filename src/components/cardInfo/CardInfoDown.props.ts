import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardInfoDownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  price: number;
  remain: number;
}

