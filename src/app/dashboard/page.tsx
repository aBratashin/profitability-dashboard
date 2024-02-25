import { Metadata } from 'next';
import StageItem from '@/components/stageItem/StageItem';
import React from 'react';
import CardItemGraph from '@/components/cardItemGraph/CardItemGraph';
import InvoiceProgress from '@/components/invoiceProgress/InvoiceProgress';

import StageProgress from '@/components/stageProgress/StageProgress';
import Header from '@/app/dashboard/components/Header';
import Line from '@/app/dashboard/components/Line';
import CardInfoUp from '@/components/cardInfo/cardInfoUp/CardInfoUp';
import CardInfoDown from '@/components/cardInfo/cardInfoDown/CardInfoDown';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Auth() {
  return (
    <main className="flex flex-col items-center h-screen gap-y-4">
      <Header />
      <Line />
      <div className="flex items-center gap-2 w-full p-4">
        <div className="flex flex-col gap-2">
          <CardInfoUp title="Готэк" month="Октябрь" year={2023} type={'seo'} src={'/img/manager_1.jpg'} />
          <CardInfoDown price={500000} remain={110000} sum={390000} progressData={[
            { category: 'time', color: 'white', initialData: 24, finalData: 76 },
            { category: 'profit', color: 'green', initialData: 20, finalData: 10 },
          ]}>
            <StageProgress color="green" isExpired={false} progress={20} />
          </CardInfoDown>
        </div>
        <CardItemGraph>
          <StageItem
            timeColor="green"
            profitColor="green"
            hours={10}
            percentage={100}
          >
            <InvoiceProgress sum={110000} type="Планируется" />
          </StageItem>
        </CardItemGraph>
      </div>
      <div className="flex items-center gap-2 w-full p-4">
        <div className="flex flex-col gap-2">
          <CardInfoUp title="Готэк" month="Октябрь" year={2023} type={'seo'} src={'/img/manager_2.jpg'} />
          <CardInfoDown price={500000} remain={110000} sum={390000} progressData={[
            { category: 'time', color: 'white', initialData: 24, finalData: 76 },
            { category: 'profit', color: 'green', initialData: 20, finalData: 10 },
          ]}>
            <StageProgress color="green" isExpired={false} progress={20} />
          </CardInfoDown>
        </div>
        <CardItemGraph>
          <StageItem
            timeColor="green"
            profitColor="green"
            hours={58}
            percentage={100}
          >
            <InvoiceProgress sum={110000} type="Планируется" />
          </StageItem>
        </CardItemGraph>
      </div>
      <div className="flex items-center gap-2 w-full p-4">
        <div className="flex flex-col gap-2">
          <CardInfoUp title="Готэк" month="Октябрь" year={2023} type={'seo'} src={'/img/manager_3.jpg'} />
          <CardInfoDown price={500000} remain={110000} sum={390000} progressData={[
            { category: 'time', color: 'white', initialData: 24, finalData: 76 },
            { category: 'profit', color: 'red', initialData: 5, finalData: 10 },
          ]}>
            <StageProgress color="red" isExpired={true} progress={1} />
          </CardInfoDown>
        </div>
        <CardItemGraph>
          <StageItem
            timeColor="red"
            profitColor="yellow"
            hours={108}
            percentage={80}
          >
            <InvoiceProgress sum={110000} type="Планируется" />
          </StageItem>
        </CardItemGraph>
      </div>
    </main>
  );
}