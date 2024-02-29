import {InvoiceProgressProps} from '@/widgets/InvoiceProgress/InvoiceProgress.props';

export const getImg = (type: InvoiceProgressProps['type']): string => {
    if (type === 'Закрыт' || type === 'Транзитный') {
        return './img/check-green.svg';
    }
    return ''
};