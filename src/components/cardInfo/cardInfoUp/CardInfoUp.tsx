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
import Clip from '/public/img/clip.svg'
import ArrowRightBlack from '/public/img/arrow-right-black.svg'

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
            <Clip className={cvaPinningImage()} />
          </div>
        )}
        <div
          className={cvaContainer()}>
          <div>
            <div className={cvaTitle()}>
              <p className={cvaTitleText()}>{title}</p>
              <ArrowRightBlack className={cvaTitleImage()} />
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