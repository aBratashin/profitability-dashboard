import React from 'react';
import Image from 'next/image';

const Line = () => {
  const lineArray = (new Array(30).fill(
      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12"
           viewBox="0 0 2 12" fill="none">
        <path d="M0.898438 0V12" stroke="#070707" strokeOpacity="0.24" />
      </svg>)
  );

  return (
    <div className="flex-col w-full justify-start items-start inline-flex px-6">
      <div className="self-stretch items-center gap-4 inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
          <path d="M0 1H112" stroke="#070707" strokeOpacity="0.12" />
        </svg>
        <div className="text-sm">2023</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1454 2" fill="none">
          <path d="M0 1H1454" stroke="#070707" strokeOpacity="0.12" />
        </svg>
      </div>

      <div className="flex items-center gap-4 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
          <path d="M0.898438 0V12" stroke="#070707" strokeOpacity="0.24" />
        </svg>
        <div>Сентябрь</div>
        <div className="flex w-full justify-between">
          {lineArray.map((line, index) => <div key={index}>{line}</div>)}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
          <path d="M1.23828 0V22" stroke="#070707" strokeOpacity="0.24" />
        </svg>
        <div>Октябрь</div>
        <div className="flex w-full justify-between">
          {lineArray.map((line, index) => <div key={index}>{line}</div>)}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
          <path d="M1.23828 0V22" stroke="#070707" strokeOpacity="0.24" />
        </svg>
        <div>Ноябрь</div>
        <div className="flex w-full justify-between">
          {lineArray.map((line, index) => <div key={index}>{line}</div>)}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
          <path d="M1.23828 0V22" stroke="#070707" strokeOpacity="0.24" />
        </svg>
        <div className="flex items-center gap-2">
          <div className="text-blue cursor-pointer">Сегодня</div>
          <Image
            src="/img/arrow-right-blue.svg"
            width={24}
            height={24}
            alt="arrow-right-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default Line;
