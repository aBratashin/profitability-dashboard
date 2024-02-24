import React, { FC } from 'react';
import { CardItemGraphProps } from '@/components/cardItemGraph/CardItemGraph.props';
import { cvaContainer, cvaWrapper } from './CardItemGraphStyles';

const CardItemGraph: FC<CardItemGraphProps> = ({ children }) => {
  return (
    <div className={cvaContainer()}>
      <div className={cvaWrapper()}>
        {children}
      </div>
    </div>
  );
};

export default CardItemGraph;