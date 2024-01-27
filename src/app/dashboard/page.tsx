import {Metadata} from 'next';
import Progress from "@/components/progress/Progress";
import SortItem from "@/components/sortItem/SortItem";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Progress type='plan' color='white' initialData={36} finalData={72}/>
            <SortItem color='white'>Все</SortItem>
        </main>
    );
}
