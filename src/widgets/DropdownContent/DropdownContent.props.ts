import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DropdownContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'manager' | 'project' | 'pay_date';
}

type CommonCategoryProps = {
  id: number;
  selected: 'yes' | 'no';
  all: 'yes' | 'no';
  label?: string;
};

interface ManagerCategory extends CommonCategoryProps {
  category: 'manager';
  src?: string;
}

interface ProjectCategory extends CommonCategoryProps {
  category: 'project';
  color?: 'purple' | 'lightgreen' | 'pink' | 'blue' | 'red';
}

interface PayDateCategory extends CommonCategoryProps {
  category: 'pay_date';
  circle_progress?: 'half-yellow' | 'half-red' | 'full-red';
}

export interface Categories {
  manager: ManagerCategory[];
  project: ProjectCategory[];
  pay_date: PayDateCategory[];
}
