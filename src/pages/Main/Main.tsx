import React from 'react';
import Header from '@/widgets/Header/Header';
import Line from '@/widgets/Line/Line';
import CardInfoUp from '@/widgets/CardInfo/CardInfoUp/CardInfoUp';
import CardInfoDown from '@/widgets/CardInfo/CardInfoDown/CardInfoDown';
import StageProgress from '@/widgets/StageProgress/StageProgress';
import CardItemGraph from '@/widgets/CardItemGraph/CardItemGraph';
import StageItem from '@/widgets/StageItem/StageItem';
import InvoiceProgress from '@/widgets/InvoiceProgress/InvoiceProgress';
import { cvaCardInfo, cvaContainer, cvaWrapper } from '@/app/styles/MainStyles';

const Main = () => {
  return (
    <main className={cvaContainer()}>
      <Header />
      <Line />
      <div className={cvaWrapper()}>
        <div className={cvaCardInfo()}>
          <CardInfoUp title="Готэк" month="Октябрь" year={2023} type={'seo'} src={'/img/manager_1.jpg'} />
          <CardInfoDown price={500000} remain={110000} sum={390000} progressData={[
            { category: 'time', color: 'white', initialData: 24, finalData: 76 },
            { category: 'profit', color: 'green', initialData: 20, finalData: 10 },
          ]}>
            <StageProgress isExpired={false} progress={20} />
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
      <div className={cvaWrapper()}>
        <div className={cvaCardInfo()}>
          <CardInfoUp title="Готэк" month="Октябрь" year={2023} type={'seo'} src={'/img/manager_2.jpg'} />
          <CardInfoDown price={500000} remain={110000} sum={390000} progressData={[
            { category: 'time', color: 'white', initialData: 24, finalData: 76 },
            { category: 'profit', color: 'green', initialData: 20, finalData: 10 },
          ]}>
            <StageProgress isExpired={false} progress={20} />
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
      <div className={cvaWrapper()}>
        <div className={cvaCardInfo()}>
          <CardInfoUp title="Готэк" month="Октябрь" year={2023} type={'seo'} src={'/img/manager_3.jpg'} />
          <CardInfoDown price={500000} remain={110000} sum={390000} progressData={[
            { category: 'time', color: 'white', initialData: 24, finalData: 76 },
            { category: 'profit', color: 'red', initialData: 5, finalData: 10 },
          ]}>
            <StageProgress isExpired={true} progress={1} />
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
};

export default Main;