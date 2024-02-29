import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { InvoiceProgressProps } from '@/widgets/InvoiceProgress/InvoiceProgress.props';

export interface InvoiceProgressCircleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: InvoiceProgressProps['type']
}