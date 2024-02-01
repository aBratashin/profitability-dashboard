import {ReactNode} from "react";

export interface StageItemProps {
    children: ReactNode,
    timeColor: 'white' | 'green' | 'yellow' | 'red',
    profitColor: 'white' | 'green' | 'yellow' | 'red',
    hours: number,
    percentage: number
}