import { InvoiceProgressProps } from '@/widgets/InvoiceProgress/InvoiceProgress.props';

export const getImg = (type: InvoiceProgressProps['type']): string => {
  if (type === 'Закрыт' || type === 'Транзитный') {
    return './img/check-green.svg';
  }
  if (type === 'Отправлен') {
    return './img/full-blue.svg';
  }
  if (type === 'Подготовлен') {
    return './img/half-yellow.svg';
  }
  if (type === 'Выставить') {
    return './img/half-red.svg';
  }
  return './img/full-gray.svg';
};