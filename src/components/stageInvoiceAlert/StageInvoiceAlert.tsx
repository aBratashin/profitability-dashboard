import React, {FC} from 'react';
import {StageInvoiceAlertProps} from "@/components/stageInvoiceAlert/StageInvoiceAlert.props";
import Image from "next/image";

const StageInvoiceAlert: FC<StageInvoiceAlertProps> = ({children}) => {
    return (
        <div className='flex items-center gap-1'>
            <div className='w-6 h-6 rounded-full bg-white flex items-center justify-center'>
                <Image
                    src="./img/arrow-left.svg"
                    width={16}
                    height={16}
                    alt="stage-progress"
                />
            </div>
            <div className='text-xs text-gray bg-white rounded-3xl py-1 px-3 flex'>
                <span className='opacity-35 font-medium'>{children}</span>
            </div>
        </div>
    );
};

export default StageInvoiceAlert