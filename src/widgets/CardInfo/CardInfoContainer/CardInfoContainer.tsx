import React, { FC } from 'react';
import { cvaCardInfo, cvaWrapper } from '@/app/styles/MainStyles';
import CardInfoUp from '@/widgets/CardInfo/CardInfoUp/CardInfoUp';
import CardInfoDown from '@/widgets/CardInfo/CardInfoDown/CardInfoDown';
import StageProgress from '@/widgets/StageProgress/StageProgress';
import CardItemGraph from '@/widgets/CardItemGraph/CardItemGraph';
import StageItem from '@/widgets/StageItem/StageItem';
import InvoiceProgress from '@/widgets/InvoiceProgress/InvoiceProgress';
import { CardInfoContainerProps } from '@/widgets/CardInfo/CardInfoContainer/CardInfoContainer.props';

const CardInfoContainer: FC<CardInfoContainerProps> = ({
                                                         title,
                                                         month,
                                                         year,
                                                         type,
                                                         src,
                                                         price,
                                                         remain,
                                                         sum,
                                                         progressData,
                                                         isExpired,
                                                         progress,
                                                         timeColor,
                                                         profitColor,
                                                         hours,
                                                         percentage,
                                                         circleType,
                                                       }) => {
  return (
    <div className={cvaWrapper()}>
      <div className={cvaCardInfo()}>
        <CardInfoUp title={title} month={month} year={year} type={type} src={src} />
        <CardInfoDown price={price} remain={remain} sum={sum} progressData={progressData}>
          <StageProgress isExpired={isExpired} progress={progress} />
        </CardInfoDown>
      </div>
      <CardItemGraph>
        <StageItem timeColor={timeColor} profitColor={profitColor} hours={hours} percentage={percentage}>
          <InvoiceProgress sum={sum} type={circleType} />
        </StageItem>
      </CardItemGraph>
    </div>
  );
};

export default CardInfoContainer;