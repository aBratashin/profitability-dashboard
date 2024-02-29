import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface StageItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    timeColor: 'white' | 'green' | 'yellow' | 'red',
    profitColor: 'white' | 'green' | 'yellow' | 'red',
    hours: number,
    percentage: number
}