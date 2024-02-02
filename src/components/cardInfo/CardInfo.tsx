import React, {FC} from 'react';
import CardInfoUp from "@/components/cardInfo/CardInfoUp";
import CardInfoDown from "@/components/cardInfo/CardInfoDown";
import StageProgress from "@/components/stageProgress/StageProgress";

const CardInfo: FC = ({}) => {
    return (
        <>
            <CardInfoUp title="HyperPC" month="Октябрь" year={2023} />
            <CardInfoDown price={139666} remain={139666}>
                <StageProgress color='green' daysQuantity={20} isExpired={false} />
            </CardInfoDown>
        </>
    )
}

export default CardInfo