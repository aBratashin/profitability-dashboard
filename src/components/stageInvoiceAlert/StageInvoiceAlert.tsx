import React, { FC } from 'react';
import { StageInvoiceAlertProps } from '@/components/stageInvoiceAlert/StageInvoiceAlert.props';
import ArrowLeft from '/public/img/arrow-left.svg'

const StageInvoiceAlert: FC<StageInvoiceAlertProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
        <ArrowLeft className="w-4 h-4" />
      </div>
      <div className="text-xs text-gray bg-white rounded-3xl py-1 px-3 flex">
        <span className="opacity-35 font-medium">{children}</span>
      </div>
    </div>
  );
};

export default StageInvoiceAlert;