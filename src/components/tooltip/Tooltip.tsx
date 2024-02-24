import React, { FC } from 'react';
import { TooltipProps } from '@/components/tooltip/Tooltip.props';
import TooltipIcon from '/public/img/tooltip-part.svg'

const Tooltip: FC<TooltipProps> = ({ type }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-medium text-base p-2.5 bg-gray rounded-lg">
        <div className="text-white">{type}</div>
      </div>
      <TooltipIcon className="w-7 h-[14]" />
    </div>
  );
};

export default Tooltip;
