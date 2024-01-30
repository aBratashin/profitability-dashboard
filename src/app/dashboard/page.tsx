import {Metadata} from 'next';
import Header from "@/app/dashboard/components/Header";
import Line from "@/app/dashboard/components/Line";
import Progress from "@/components/progress/Progress";
import SortItem from "@/components/sortItem/SortItem";
import StageProgress from "@/components/stageProgress/StageProgress";
import Category from "@/components/category/Category";
import InvoiceProgress from "@/components/invoiceProgress/InvoiceProgress";
import StageInvoiceAlert from "@/components/stageInvoiceAlert/StageInvoiceAlert";
import Tooltip from "@/components/tooltip/Tooltip";
import DropdownItem from "@/components/dropdownItem/DropdownItem";
import DropdownContent from "@/components/dropdownContent/DropdownContent";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main className='flex flex-col items-center justify-center gap-10 h-screen'>
            <Header/>
            <Line/>
            <Progress color='green' category='time' initialData={36} finalData={72}/>
            <SortItem state='default'>Все</SortItem>
            <StageProgress color='green' progress={7} isExpired={true}/>
            <Category type='dev' />
            <InvoiceProgress sum={220000} type='Планируется'/>
            <StageInvoiceAlert>Дизайн</StageInvoiceAlert>
            <Tooltip type='Планируется'/>
            <DropdownItem selected='yes' category='manager' all='no' manager_id={1}>Разработка сайта</DropdownItem>
            <DropdownContent type='Дата оплаты'/>
        </main>
    );
}
