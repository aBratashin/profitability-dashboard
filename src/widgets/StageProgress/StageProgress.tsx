import React, { FC } from 'react';
import classNames from 'classnames';
import { StageProgressProps } from './StageProgress.props';
import Image from 'next/image';
import {
  cvaContainer,
  cvaGreen,
  cvaImage,
  cvaRed,
  cvaText,
  cvaYellow,
} from '@/widgets/StageProgress/StageProgressStyles';

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

const getImg = (color: StageProgressProps['color'], days: number, expired: StageProgressProps['isExpired']): string => {
  if (color === 'green') {
    if (days > 31) {
      return './img/full-green.svg';
    }
    return './img/half-green.svg';
  } else if (color === 'yellow') {
    return './img/half-yellow.svg';
  } else if (color === 'red') {
    if (expired) {
      return './img/full-red.svg';
    }
    return './img/half-red.svg';
  }
  return './img/full-green.svg';
};

const StageProgress: FC<StageProgressProps> = ({ color, progress, isExpired }) => {
  const daysEnding = getDaysEnding(progress);
  const imgSrc = getImg(color, progress, isExpired);

  return (
    <div className={cvaContainer()}>
      <Image
        src={imgSrc}
        width={18}
        height={18}
        alt="stage-progress"
        className={cvaImage()}
      />
      <span className={classNames([cvaText], {
        [cvaGreen()]: color === 'green',
        [cvaYellow()]: color === 'yellow',
        [cvaRed()]: color === 'red',
      })}>
                {progress} {daysEnding}
        {isExpired && ' назад'}
            </span>
    </div>
  );
};

export default StageProgress;