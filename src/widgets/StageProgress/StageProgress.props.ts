import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface StageProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color: 'green' | 'yellow' | 'red',
    progress: number,
    isExpired: boolean
}