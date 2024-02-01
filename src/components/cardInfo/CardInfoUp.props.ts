import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardInfoUpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string
    month: 'Декабрь' | 'Январь' | 'Февраль' | 'Март' | 'Апрель' | 'Май' | 'Июнь' | 'Июль' | 'Август' | 'Сентябрь' | 'Октябрь' | 'Ноябрь'
    year: number
}