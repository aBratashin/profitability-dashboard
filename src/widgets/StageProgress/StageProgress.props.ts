import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface StageProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    progress: number,
    isExpired: boolean
}