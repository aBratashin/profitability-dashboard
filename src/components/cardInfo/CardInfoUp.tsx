'use client';
import React, { FC, useState } from 'react';
import { CardInfoUpProps } from '@/components/cardInfo/CardInfoUp.props';
import Image from 'next/image';
import Category from '@/components/category/Category';
import Clip from '/public/img/clip.svg'
import ArrowRight from '/public/img/arrow-right-black.svg'

const CardInfoUp: FC<CardInfoUpProps> = ({ title, month, year, type, manager_id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onDoubleClick={() => setIsHovered(prev => !prev)}
    >
      <div className="flex">
        {isHovered && (
          <div
            className="p-3 w-20 h-30 mr-[10px] bg-white rounded-3xl shadow-md flex items-center justify-center hover:cursor-pointer">
            <Clip className="rounded-full w-3.5 h-3.5" />
          </div>
        )}
        <div
          className="flex w-full justify-between bg-white rounded-3xl shadow-md flex items-center justify-center hover:cursor-pointer px-5 py-3">
          <div>
            <div className="flex gap-3">
              <p className="text-3xl">{title}</p>
              <ArrowRight className="w-2.5 h-3.5 mt-3" />
            </div>
            <div className="flex gap-3 items-center">
              <p className="opacity-50 font-medium">{month} {year}</p>
              <Category type={type} />
            </div>
          </div>
          <Image
            src={`/img/manager_${manager_id}.jpg`}
            width={70}
            height={60}
            alt="arrow-right-black"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CardInfoUp;