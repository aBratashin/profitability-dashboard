import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface StageProgressCircleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    progress: number;
    isExpired: boolean;
}