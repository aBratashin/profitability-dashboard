import React, { FC } from 'react';
import { StageProgressProps } from './StageProgress.props';
import { cvaContainer } from '@/widgets/StageProgress/StageProgressStyles';
import CircleProgress from '@/shared/ui/CircleProgress/CircleProgress';
import { getDaysEnding, getTextColor } from '@/widgets/StageProgress/helpers/StageHelpers';

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
