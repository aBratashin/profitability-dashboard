import React, { FC } from 'react';
import { StageProgressProps } from './StageProgress.props';
import { cvaContainer } from '@/widgets/StageProgress/StageProgressStyles';
import CircleProgress from '@/shared/ui/CircleProgress/CircleProgress';

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

const getTextColor = (progress: number): string => {
  if (progress >= 20) {
    return '#01BF64';
  } else if (progress > 7) {
    return '#F8AE00';
  } else {
    return '#FF5757';
  }
};

const StageProgress: FC<StageProgressProps> = ({ progress, isExpired }) => {
  const daysEnding = getDaysEnding(progress);
  const textColor = getTextColor(progress);

  return (
    <div className={cvaContainer()}>
      <CircleProgress progress={progress} />
      <span
        style={{ color: textColor }}
      >
        {progress} {daysEnding}
        {isExpired && ' назад'}
      </span>
    </div>
  );
};

export default StageProgress;
