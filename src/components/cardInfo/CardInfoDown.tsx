import React, { FC } from 'react';
import { CardInfoDownProps } from '@/components/cardInfo/CardInfoDown.props';
import Progress from '@/components/progress/Progress';
import InvoiceProgress from '@/components/invoiceProgress/InvoiceProgress';

const CardInfoDown: FC<CardInfoDownProps> = ({ price, remain, children, sum, progressData }) => {
  console.log(progressData);
  return (
    <div>
      <div className="px-5 py-3 min-w-[500px] rounded-3xl bg-white font-medium">

        <div className="flex justify-between">
          <div>
            <p className="text-3xl">
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
            <InvoiceProgress type="Закрыт" sum={sum} />
            <div className="flex gap-1 opacity-50 font-medium">
              <p>Остаток</p>
              <p>
                {new Intl.NumberFormat('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 0,
                }).format(remain)}
              </p>
            </div>
            <div className="mt-10">
              <p>31 июл. 2023</p>
              <div className="flex gap-5">
                <p>13 нояб. 2023</p>
                {children}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            {progressData?.map(el => <Progress category={el.category} color={el.color} initialData={el.initialData}
                                               finalData={el.finalData} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoDown;