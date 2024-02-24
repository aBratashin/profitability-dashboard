'use client';
import React, { FC, useState } from 'react';
import { CardInfoUpProps } from '@/components/cardInfo/cardInfoUp/CardInfoUp.props';
import Image from 'next/image';
import Category from '@/components/category/Category';
import {
  cvaContainer,
  cvaDate,
  cvaImage,
  cvaInfo,
  cvaPinning,
  cvaPinningImage,
  cvaTitle,
  cvaTitleImage,
  cvaTitleText,
} from './CardInfoUpStyles';

const CardInfoUp: FC<CardInfoUpProps> = ({ title, month, year, type, manager_id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onDoubleClick={() => setIsHovered(prev => !prev)}
    >
      <div className="flex">
        {isHovered && (
          <div
            className={cvaPinning()}>
            <Image
              src="/img/clip.svg"
              width={15}
              height={15}
              alt="arrow-right-black"
              className={cvaPinningImage()}
            />
          </div>
        )}
        <div
          className={cvaContainer()}>
          <div>
            <div className={cvaTitle()}>
              <p className={cvaTitleText()}>{title}</p>
              <Image
                src="/img/arrow-right-black.svg"
                width={10}
                height={10}
                alt={cvaTitleImage()}
              />
            </div>
            <div className={cvaInfo()}>
              <p className={cvaDate()}>{month} {year}</p>
              <Category type={type} />
            </div>
          </div>
          <Image
            src={`/img/manager_${manager_id}.jpg`}
            width={70}
            height={60}
            alt="arrow-right-black"
            className={cvaImage()}
          />
        </div>
      </div>
    </div>
  );
};

export default CardInfoUp;