import {Metadata} from 'next';
import DropdownItem from "@/components/dropdownItem/DropdownItem";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main className='flex flex-col items-center justify-center gap-10 h-screen'>
            <Header/>
            <Line/>
            <Progress color='green' type='grade' initialData={36} finalData={72}/>
            <SortItem color='white'>Все</SortItem>
            <StageProgress color='green' daysQuantity={7} isExpired={true}/>
            <Category type='dev' />
            <InvoiceProgress sum={220000} type='Планируется'/>
            <StageInvoiceAlert>Дизайн</StageInvoiceAlert>
            <Tooltip type='Планируется'/>
            <DropdownItem selected='yes' category='manager' all='no'>Разработка сайта</DropdownItem>
        </main>
    );
}
