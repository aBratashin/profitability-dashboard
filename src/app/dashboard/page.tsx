import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Auth() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Dashboard</div>
    </main>
  );
}
