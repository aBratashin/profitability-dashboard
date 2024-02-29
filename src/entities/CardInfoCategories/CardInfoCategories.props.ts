import {CardInfoUpProps} from '@/widgets/CardInfo/CardInfoUp/CardInfoUp.props';
import {CardInfoDownProps} from '@/widgets/CardInfo/CardInfoDown/CardInfoDown.props';
import {StageProgressProps} from '@/widgets/StageProgress/StageProgress.props';
import {StageItemProps} from '@/widgets/StageItem/StageItem.props';
import {InvoiceProgressProps} from '@/widgets/InvoiceProgress/InvoiceProgress.props';

export interface CardInfoCategoriesProps {
    id: number;
    title: string;
    month: CardInfoUpProps['month'];
    year: CardInfoUpProps['year'];
    type: CardInfoUpProps['type'];
    src: CardInfoUpProps['src'];
    price: CardInfoDownProps['price'];
    remain: CardInfoDownProps['remain'];
    sum: CardInfoDownProps['sum'];
    progressData: CardInfoDownProps['progressData'];
    isExpired: StageProgressProps['isExpired'];
    progress: StageProgressProps['progress'];
    timeColor: StageItemProps['timeColor'];
    profitColor: StageItemProps['profitColor'];
    hours: StageItemProps['hours'];
    percentage: StageItemProps['percentage'];
    circleType: InvoiceProgressProps['type'];
}