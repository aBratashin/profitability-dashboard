import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface InvoiceProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'Планируется' | 'Выставить' | 'Подготовлен' | 'Отправлен' | 'Закрыт' | 'Транзитный',
    sum: number
}