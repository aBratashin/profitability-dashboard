import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white p-24 flex flex-col gap-8 rounded-3xl">
        <div className="flex items-center justify-center">
          <Image
            src="/img/person.svg"
            width={64}
            height={64}
            alt="User"
            className="mr-4 rounded-full"
          />
          <p className="text-xl font-semibold text-center">Егор Коротаев</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <Link className="bg-blue py-5 px-9 rounded-2xl text-white text-center font-medium" href={'/dashboard'}>
            Авторизоваться через ClickUp
          </Link>
          <Image
            src="/img/clickUp.svg"
            width={62}
            height={35}
            alt="clickUp"
          />
        </div>
      </div>
    </main>
  );
}
