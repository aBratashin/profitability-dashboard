import React, { FC } from 'react';
import classNames from "classnames";
import {StageProgressProps} from "./StageProgress.props";
import Image from "next/image";

const getDaysEnding = (number: number): string => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'день';
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
        return 'дня';
    } else {
        return 'дней';
    }
};

const StageProgress: FC<StageProgressProps> = ({ color, daysQuantity, isExpired }) => {
    const daysEnding = getDaysEnding(daysQuantity);

    return (
        <div className='flex items-center'>
            <div className='stroke-amber-400'>
                <Image
                    src="/img/stage-progress.svg"
                    width={18}
                    height={18}
                    alt="stage-progress"
                    className={classNames(['mr-2'], {
                        ['stroke-progressGreen']: color === 'green',
                        ['stroke-progressYellow']: color === 'yellow',
                        ['stroke-progressRed']: color === 'red'
                    })}
                />
            </div>
            <span className={classNames(['text-sm font-medium'],{
                ['text-progressGreen']: color === 'green',
                ['text-progressYellow']: color === 'yellow',
                ['text-progressRed']: color === 'red'
            })}>
                {daysQuantity} {daysEnding}
                {isExpired && ' назад'}
            </span>
        </div>
    );
};

export default StageProgress