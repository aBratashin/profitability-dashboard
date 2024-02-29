import React, {FC} from 'react';
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/ru';
import {InvoiceProgressProps} from '@/widgets/InvoiceProgress/InvoiceProgress.props';
import Image from 'next/image';
import classNames from 'classnames';
import {cvaContainer, cvaImage, cvaSubtext, cvaText, cvaTransitText} from './InvoiceProgressStyles';
import {getImg} from '@/widgets/InvoiceProgress/helpers/InvoiceHelpers';
import InvoiceProgressCircle from '@/shared/ui/InvoiceProgressCircle/InvoiceProgressCircle';

const InvoiceProgress: FC<InvoiceProgressProps> = ({sum, type}) => {
    const imgSrc = getImg(type);

    return (
        <div className={cvaContainer()}>
            {imgSrc && <Image
                src={imgSrc}
                width={16}
                height={16}
                alt="stage-progress"
                loading={'eager'}
                className={cvaImage()}
            />}
            {(type !== 'Закрыт' && type !== 'Транзитный') && <InvoiceProgressCircle type={type}/>}
            <span
                className={classNames([cvaText()], {
                    [cvaSubtext()]:
                    type === 'Закрыт' || type === 'Транзитный',
                })}
            >
				{new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 0,
                }).format(sum)}
			</span>
            {type === 'Транзитный' && (
                <span className={cvaTransitText()}>транзит</span>
            )}
        </div>
    );
};

export default InvoiceProgress;
