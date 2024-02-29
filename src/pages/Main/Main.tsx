import React from 'react';
import Header from '@/widgets/Header/Header';
import Line from '@/widgets/Line/Line';
import { cvaContainer } from '@/app/styles/MainStyles';
import CardInfoContainer from '@/widgets/CardInfo/CardInfoContainer/CardInfoContainer';
import { CardInfoCategories } from '@/entities/CardInfoCategories/CardInfoCategories';

const Main = () => {
  return (
    <main className={cvaContainer()}>
      <Header />
      <Line />
      {CardInfoCategories.map(({ id, ...restProps }) => (
        <CardInfoContainer key={id} {...restProps} />
      ))}
    </main>
  );
};

export default Main;