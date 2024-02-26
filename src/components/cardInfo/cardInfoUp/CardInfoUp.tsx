'use client';
import React, {FC, useState} from 'react';
import {CardInfoUpProps} from '@/components/cardInfo/cardInfoUp/CardInfoUp.props';
import Image from 'next/image';
import Category from "@/components/Category/Category";
import {
  cvaContainer,
  cvaDate,
  cvaImage,
  cvaInfo,
  cvaPinning,
  cvaPinningImage,
  cvaTitle,
  cvaTitleText,
} from './CardInfoUpStyles';
import Clip from '/public/img/clip.svg';
import {AnimatePresence, motion} from 'framer-motion';
import ArrowRightBlack from "@/shared/ui/Arrow/arrowRightBlack/ArrowRightBlack";

const CardInfoUp: FC<CardInfoUpProps> = ({title, month, year, type, src}) => {
    const [isPinningVisible, setPinningVisible] = useState(false);

    const handleDoubleClick = () => {
        setPinningVisible(!isPinningVisible);
    };

    return (
        <motion.div onDoubleClick={handleDoubleClick}
                    layout
                    transition={{duration: 0.5}}
        >
            <div className="flex">
                <AnimatePresence>
                    {isPinningVisible && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}
                            className={cvaPinning()}
                        >
                            <Clip className={cvaPinningImage()}/>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className={cvaContainer()}>
                    <div>
                        <div className={cvaTitle()}>
                            <p className={cvaTitleText()}>{title}</p>
                            <ArrowRightBlack/>
                        </div>
                        <div className={cvaInfo()}>
                            <p className={cvaDate()}>{month} {year}</p>
                            <Category type={type}/>
                        </div>
                    </div>
                    <Image
                        src={src || ''}
                        width={70}
                        height={60}
                        alt="arrow-right-black"
                        className={cvaImage()}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default CardInfoUp;
