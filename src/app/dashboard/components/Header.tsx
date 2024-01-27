import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div className="w-[100%] h-14 justify-between items-center inline-flex">
                <div className="text-neutral-700 text-5xl font-medium font-['Suisse Intl']">Рентабельность</div>
                <div className="justify-start items-start gap-4 flex">
                    <div
                        className="w-[400px] h-10 px-4 py-3 bg-white rounded-[32px] justify-start items-center gap-2.5 flex">
                        <div
                            className="text-zinc-950 text-opacity-30 text-sm font-['Suisse Int'l'] leading-[18px]">Найти
                            проект
                        </div>
                    </div>
                    <div
                        className="pl-2 pr-3 py-2 rounded-[32px] border-2 border-neutral-200 justify-start items-center gap-2.5 flex">
                        <div
                            className="w-[37px] px-1.5 pb-0.5 bg-zinc-950 bg-opacity-50 rounded-[500px] justify-center items-center gap-2.5 flex">
                            <div className="text-white text-sm font-['Suisse Int'l'] leading-[18px]">все</div>
                        </div>
                        <div className="text-zinc-800 text-sm font-['Suisse Int'l'] leading-[18px]">Менеджеры</div>
                        <div className="w-6 h-6 relative"/>
                        <Image
                            src="/img/arrow-down.svg"
                            width={24}
                            height={24}
                            alt="User"
                            className="rounded-full"
                        />
                    </div>
                    <div
                        className="pl-2 pr-3 py-2 rounded-[32px] border-2 border-neutral-200 justify-start items-center gap-2.5 flex">
                        <div
                            className="w-[37px] px-1.5 pb-0.5 bg-zinc-950 bg-opacity-50 rounded-[500px] justify-center items-center gap-2.5 flex">
                            <div className="text-white text-sm font-['Suisse Int'l'] leading-[18px]">все</div>
                        </div>
                        <div className="text-zinc-800 text-sm font-['Suisse Int'l'] leading-[18px]">Тип проекта</div>
                        <div className="w-6 h-6 relative"/>
                        <Image
                            src="/img/arrow-down.svg"
                            width={24}
                            height={24}
                            alt="User"
                            className="rounded-full"
                        />
                    </div>
                    <div
                        className="pl-2 pr-3 py-2 rounded-[32px] border-2 border-neutral-200 justify-start items-center gap-2.5 flex">
                        <div
                            className="w-[37px] px-1.5 pb-0.5 bg-zinc-950 bg-opacity-50 rounded-[500px] justify-center items-center gap-2.5 flex">
                            <div className="text-white text-sm font-['Suisse Int'l'] leading-[18px]">все</div>
                        </div>
                        <div className="text-zinc-800 text-sm font-['Suisse Int'l'] leading-[18px]">Дата оплаты</div>
                        <div className="w-6 h-6 relative"/>
                        <Image
                            src="/img/arrow-down.svg"
                            width={24}
                            height={24}
                            alt="User"
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-[90px] px-3 py-2 bg-white rounded-[32px] justify-start items-center gap-2.5 flex">
                        <div className="text-zinc-800 text-sm font-['Suisse Int'l'] leading-[18px]">Очистить</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;