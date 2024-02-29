import React, {FC} from 'react';
import {StageProgressProps} from './StageProgress.props';
import {cvaContainer} from '@/widgets/StageProgress/StageProgressStyles';
import StageProgressCircle from '@/shared/ui/StageProgressCircle/StageProgressCircle';
import {getDaysEnding, getTextColor} from '@/widgets/StageProgress/helpers/StageHelpers';

const StageProgress: FC<StageProgressProps> = ({progress, isExpired}) => {
    const daysEnding = getDaysEnding(progress);
    const textColor = getTextColor(progress, isExpired);

    return (
        <div className={cvaContainer()}>
            <StageProgressCircle progress={progress} isExpired={isExpired}/>
            <span
                style={{color: textColor}}
            >
        {progress} {daysEnding}
                {isExpired && ' назад'}
      </span>
        </div>
    );
};

export default StageProgress;
