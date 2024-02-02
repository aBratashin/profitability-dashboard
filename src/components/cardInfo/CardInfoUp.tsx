'use client'

import React, { FC, useState } from 'react';
import { CardInfoUpProps } from "@/components/cardInfo/CardInfoUp.props";
import Image from "next/image";
import Category from "@/components/category/Category";

const CardInfoUp: FC<CardInfoUpProps> = ({ title, month, year }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="hover:cursor-pointer relative px-5 py-3 w-[500px] rounded-3xl bg-white font-medium flex justify-between"
            onDoubleClick={() => setIsHovered(prev => !prev )}
        >
            {isHovered && (
                <div className="absolute left-[-80px] p-3 w-14 h-20 bg-white rounded-3xl shadow-md flex items-center justify-center">
                    <Image
                        src="/img/clip.svg"
                        width={15}
                        height={15}
                        alt="arrow-right-black"
                        className="rounded-full"
                    />
                </div>
            )}
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
                    <Category type="hours" />
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

export default CardInfoUp;
