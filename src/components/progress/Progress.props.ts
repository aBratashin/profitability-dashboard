import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    type: 'plan' | 'grade',
    color: 'white' | 'green' | 'red'
    initialData: number,
    finalData: number
}