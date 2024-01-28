import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface StageProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color: 'green' | 'yellow' | 'red',
    daysQuantity: number,
    isExpired: boolean
}