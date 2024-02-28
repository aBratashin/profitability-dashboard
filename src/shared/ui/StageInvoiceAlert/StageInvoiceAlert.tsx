import React, { FC } from 'react';
import { StageInvoiceAlertProps } from '@/shared/ui/StageInvoiceAlert/StageInvoiceAlert.props';
import ArrowLeft from '/public/img/arrow-left.svg';
import {
  cvaArrow,
  cvaArrowContainer,
  cvaChildren,
  cvaChildrenContainer,
  cvaContainer,
} from '@/shared/ui/StageInvoiceAlert/StageInvoiceAlertStyles';

const StageInvoiceAlert: FC<StageInvoiceAlertProps> = ({ children }) => {
  return (
    <div className={cvaContainer()}>
      <div className={cvaArrowContainer()}>
        <ArrowLeft className={cvaArrow()} />
      </div>
      <div className={cvaChildrenContainer()}>
        <span className={cvaChildren()}>{children}</span>
      </div>
    </div>
  );
};

export default StageInvoiceAlert;