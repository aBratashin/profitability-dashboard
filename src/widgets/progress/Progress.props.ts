import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface ProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    category: 'time' | 'profit',
    color: 'white' | 'green' | 'red'
    initialData: number,
    finalData: number
}