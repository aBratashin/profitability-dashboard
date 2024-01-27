import { Metadata } from 'next';
import Header from "@/app/dashboard/components/Header";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Auth() {
    return (
        <main className="">
            <Header />
        </main>
    );
}
