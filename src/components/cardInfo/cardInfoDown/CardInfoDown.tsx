import React, { FC } from 'react';
import { CardInfoDownProps } from '@/components/cardInfo/cardInfoDown/CardInfoDown.props';
import Progress from '@/components/progress/Progress';
import InvoiceProgress from '@/components/invoiceProgress/InvoiceProgress';
import {
  cvaContainer,
  cvaDateBlock,
  cvaDateEnd,
  cvaPrice,
  cvaProgress,
  cvaRemains,
  cvaWrapper,
} from './CardInfoDownStyles';

const CardInfoDown: FC<CardInfoDownProps> = ({ price, remain, children, sum, progressData }) => {
  return (
    <div>
      <div className={cvaWrapper()}>
        <div className={cvaContainer()}>
          <div>
            <p className={cvaPrice()}>
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
            <InvoiceProgress type="Закрыт" sum={sum} />
            <div className={cvaRemains()}>
              <p>Остаток</p>
              <p>
                {new Intl.NumberFormat('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 0,
                }).format(remain)}
              </p>
            </div>
            <div className={cvaDateBlock()}>
              <p>31 июл. 2023</p>
              <div className={cvaDateEnd()}>
                <p>13 нояб. 2023</p>
                {children}
              </div>
            </div>
          </div>

          <div className={cvaProgress()}>
            {progressData?.map(el => <Progress key={el.category} category={el.category} color={el.color}
                                               initialData={el.initialData}
                                               finalData={el.finalData} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoDown;