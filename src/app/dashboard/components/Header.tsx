import React from 'react';
import Image from "next/image";
import Search from "@/components/search/Search";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full px-6 py-6">
            <div>
                <h1 className="text-5xl font-medium">Рентабельность</h1>
            </div>
            <div className="flex gap-6 items-center">
                <Search placeholder='Найти проект'/>
                <div className="px-1 py-1 gap-2.5 flex items-center rounded-full w-52 border-2 border-lightgray">
                    <div
                        className="max-w-[50px] opacity-50 text-white px-3 py-1 rounded-full bg-gray flex justify-center items-center">
                        <p>Все</p>
                    </div>
                    <p>Менеджеры</p>
                    <Image
                        src="/img/arrow-down.svg"
                        width={24}
                        height={24}
                        alt="arrow-down"
                        className="mr-4 rounded-full"
                    />
                </div>
                <div className="px-1 py-1 gap-2.5 flex items-center rounded-full w-54 border-2 border-lightgray">
                    <div
                        className="max-w-[50px] opacity-50 text-white px-3 py-1 rounded-full bg-gray flex justify-center items-center">
                        <p>Все</p>
                    </div>
                    <p>Тип проекта</p>
                    <Image
                        src="/img/arrow-down.svg"
                        width={24}
                        height={24}
                        alt="arrow-down"
                        className="mr-4 rounded-full"
                    />
                </div>
                <div className="px-1 py-1 gap-2.5 flex items-center rounded-full w-54 border-2 border-lightgray">
                    <div
                        className="max-w-[50px] opacity-50 text-white px-3 py-1 rounded-full bg-gray flex justify-center items-center">
                        <p>Все</p>
                    </div>
                    <p>Дата оплаты</p>
                    <Image
                        src="/img/arrow-down.svg"
                        width={24}
                        height={24}
                        alt="arrow-down"
                        className="mr-4 rounded-full"
                    />
                </div>
                <button className="bg-white rounded-full w-24 py-2">
                    Очистить
                </button>
            </div>
        </div>
    );
};

export default Header;
