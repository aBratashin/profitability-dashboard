import React from 'react';
import Header from '@/widgets/Header/Header';
import Line from '@/widgets/Line/Line';
import { cvaContainer } from '@/app/styles/MainStyles';
import CardInfoContainer from '@/widgets/CardInfo/CardInfoContainer/CardInfoContainer';
import { CardInfoCategories } from '@/entities/CardInfoCategories/CardInfoCategories';
import DropdownItem from '@/widgets/DropdownItem/DropdownItem';

const Main = () => {
  return (
    <main className={cvaContainer()}>
      <Header />
      <Line />
      {CardInfoCategories.map(({ id, ...restProps }) => (
        <CardInfoContainer key={id} {...restProps} />
      ))}
      {/*<DropdownContent type={'pay_date'} />*/}
      <DropdownItem all={'no'} category={'project'} selected={'yes'} color={'purple'} />
    </main>
  );
};

export default Main;