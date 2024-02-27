import React, {FC} from 'react';
import {TooltipProps} from '@/shared/ui/Tooltip/Tooltip.props';
import TooltipIcon from '/public/img/tooltip-part.svg';
import {cvaContainer, cvaIcon, cvaType, cvaWrapper} from '@/shared/ui/Tooltip/TooltipStyles';

const Tooltip: FC<TooltipProps> = ({type}) => {
    return (
        <div className={cvaContainer()}>
            <div className={cvaWrapper()}>
                <div className={cvaType()}>{type}</div>
            </div>
            <TooltipIcon className={cvaIcon()}/>
        </div>
    );
};

export default Tooltip;
