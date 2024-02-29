import React, { FC } from 'react';
import { StageProgressCircleProps } from '@/shared/ui/StageProgressCircle/StageProgressCircle.props';

const StageProgressCircle: FC<StageProgressCircleProps> = ({ progress, isExpired }) => {
  const circumference = 1.8 * Math.PI * 9;
  const grayCircumference = circumference;
  let strokeColor = '#FF5757';
  let strokeDashoffset = (1 + progress / 32) * circumference;

  if (isExpired) {
    strokeDashoffset = 0;
  } else {
    if (progress >= 20) {
      strokeColor = '#01BF64';
    } else if (progress > 7) {
      strokeColor = '#F8AE00';
    }
  }

  return (
    <svg width="20" height="20" style={{ marginRight: 6, transform: 'rotate(-90deg)' }}>
      <circle
        cx="9"
        cy="9"
        r="8"
        fill="transparent"
        stroke="#E4E4E4"
        strokeWidth="2.5"
        strokeDasharray={`${grayCircumference} ${grayCircumference}`}
        strokeDashoffset={0}
      />
      <circle
        cx="9"
        cy="9"
        r="8"
        fill="transparent"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeDasharray={`${circumference}`}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export default StageProgressCircle;