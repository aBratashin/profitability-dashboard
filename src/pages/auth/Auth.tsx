import React from 'react';
import Image from 'next/image';
import ClickUp from '/public/img/clickUp.svg';
import AuthButton from '@/shared/ui/button/authButton/AuthButton';

const Auth = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white p-24 flex flex-col gap-8 rounded-3xl">
        <div className="flex items-center justify-center">
          <Image
            src="/img/Person.png"
            width={64}
            height={64}
            alt="User"
            className="mr-4 rounded-full"
          />
          <p className="text-xl font-semibold text-center">Егор Коротаев</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <AuthButton />
          <ClickUp className="w-16 h-9" />
        </div>
      </div>
    </main>
  );
};

export default Auth;