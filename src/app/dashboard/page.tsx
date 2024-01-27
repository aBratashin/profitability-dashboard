import {Metadata} from 'next';
import Progress from "@/components/progress/Progress";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Progress type='grade' color='white' initialData={24} finalData={72}/>
            </div>
        </main>
    );
}
