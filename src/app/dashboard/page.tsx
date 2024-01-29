import {Metadata} from 'next';
import StageInvoiceAlert from "@/components/stageInvoiceAlert/StageInvoiceAlert";
import InvoiceProgress from "@/components/InvoiceProgress/InvoiceProgress";
import Progress from "@/components/progress/Progress";
import SortItem from "@/components/sortItem/SortItem";
import StageProgress from "@/components/stageProgress/StageProgress";
import Category from "@/components/category/Category";
import Tooltip from "@/components/tooltip/Tooltip";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main>
            <Progress color='green' type='grade' initialData={36} finalData={72}/>
            <SortItem color='white'>Все</SortItem>
            <StageProgress color='green' daysQuantity={7} isExpired={true}/>
            <Category color='purple'>Разработка сайта</Category>
            <InvoiceProgress sum={220000} type='Планируется'/>
            <StageInvoiceAlert>Дизайн</StageInvoiceAlert>
            <Tooltip type='Планируется'/>
        </main>
    );
}
