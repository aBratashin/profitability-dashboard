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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*<Progress color='green' type='grade' initialData={36} finalData={72}/>*/}
            {/*<SortItem color='white'>Все</SortItem>*/}
            {/*<StageProgress color='green' daysQuantity={7} isExpired={true}/>*/}
            <Category type='dev' />
            {/*<InvoiceProgress sum={220000} type='Транзитный'/>*/}
            {/*<StageInvoiceAlert>Дизайн</StageInvoiceAlert>*/}
            {/*<Tooltip type='Планируется'/>*/}
        </main>
    );
}