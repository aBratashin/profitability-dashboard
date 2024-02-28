import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DropdownItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  selected: 'yes' | 'no';
  category: 'manager' | 'project' | 'pay_date';
  all: 'yes' | 'no';
  color?: 'purple' | 'lightgreen' | 'pink' | 'blue' | 'red';
  src?: string;
  circle_progress?: 'half-yellow' | 'half-red' | 'full-red';
}

export interface ManagerItem {
  id: number;
  src: string;
  title: string;
}

interface ImageItem {
  id: number;
  item: React.JSX.Element;
  title: string;
}

export interface Images {
  manager: ManagerItem[];
  project: ImageItem[];
  payDate: ImageItem[];
}