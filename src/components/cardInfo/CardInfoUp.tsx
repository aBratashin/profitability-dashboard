import React, {FC} from 'react';
import {CardInfoUpProps} from "@/components/cardInfo/CardInfoUp.props";
import Image from "next/image";
import Category from "@/components/category/Category";

const CardInfoUp: FC<CardInfoUpProps> = ({title, month, year}) => {
    return (
        <div className="px-5 py-3 min-w-[500px] rounded-3xl bg-white font-medium flex justify-between mb-2">
            <div>
                <div className="flex gap-3">
                    <p className="text-3xl">{title}</p>
                    <Image
                        src="/img/arrow-right-black.svg"
                        width={10}
                        height={10}
                        alt="arrow-right-black"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <p className="opacity-50 font-medium">{month} {year}</p>
                    <Category type="hours"/>
                </div>
            </div>
            <Image
                src="/img/manager_1.jpg"
                width={70}
                height={60}
                alt="arrow-right-black"
                className="rounded-full"
            />
        </div>
    )
}

export default CardInfoUp