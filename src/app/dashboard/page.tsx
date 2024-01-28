import {Metadata} from 'next';
import Progress from "@/components/progress/Progress";
import SortItem from "@/components/sortItem/SortItem";
import Header from "@/app/dashboard/components/Header";
import StageProgress from "@/components/stageProgress/StageProgress";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header/>
            <Progress color='green' type='grade' initialData={36} finalData={72}/>
            <SortItem color='white'>Все</SortItem>
            <StageProgress color='green' daysQuantity={43} isExpired={true}/>
        </main>
    );
}
