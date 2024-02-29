import React, {FC} from 'react';
import {InvoiceProgressCircleProps} from '@/shared/ui/InvoiceProgressCircle/InvoiceProgressCircle.props';
import {cvaSvg} from "@/shared/ui/InvoiceProgressCircle/InvoiceProgressCircleStyles";

const InvoiceProgressCircle: FC<InvoiceProgressCircleProps> = ({type}) => {
    const circumference = 1.8 * Math.PI * 9;
    const grayCircumference = circumference;
    let strokeColor = '#FFF';
    let strokeDashoffset = 0;


    if (type === 'Планируется') {
        strokeColor = '#f5f5f5';
        strokeDashoffset = 102;
    }

    if (type === 'Отправлен') {
        strokeColor = '#64B1F9';
        strokeDashoffset = 102;
    }

    if (type === 'Подготовлен') {
        strokeColor = '#F8AE00';
        strokeDashoffset = 15;
    }

    if (type === 'Выставить') {
        strokeColor = '#FF5757';
        strokeDashoffset = 35;
    }

    return (
        <svg width="20" height="20" className={cvaSvg()}>
            <circle
                cx="9"
                cy="9"
                r="8"
                fill="transparent"
                stroke="#E4E4E4"
                strokeWidth="2.5"
                strokeDasharray={`${grayCircumference} ${grayCircumference}`}
                strokeDashoffset={0}
            />
            <circle
                cx="9"
                cy="9"
                r="8"
                fill="transparent"
                stroke={strokeColor}
                strokeWidth="2.5"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={strokeDashoffset}
            />
        </svg>
    );
};

export default InvoiceProgressCircle;