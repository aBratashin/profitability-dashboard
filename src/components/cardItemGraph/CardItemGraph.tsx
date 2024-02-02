import React, { FC } from 'react';
import { CardItemGraphProps } from '@/components/cardItemGraph/CardItemGraph.props';

const CardItemGraph: FC<CardItemGraphProps> = ({ children }) => {
  return (
    <div className="bg-back min-w-[1115px] min-h-[272px] rounded-3xl flex items-center justify-center">
      <div className="max-w-[557px] max-h-[108px]">
        {children}
      </div>
    </div>
  );
};

export default CardItemGraph;