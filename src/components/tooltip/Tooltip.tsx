import React, {FC} from 'react';
import {TooltipProps} from "@/components/tooltip/Tooltip.props";
import Image from "next/image";

const Tooltip: FC<TooltipProps> = ({type}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='font-medium text-base p-2.5 bg-gray rounded-lg'>
                <div className='text-white'>{type}</div>
            </div>
            <Image
                src="./img/tooltip-part.svg"
                width={28}
                height={13.5}
                alt="stage-progress"
            />
        </div>
    )
};

export default Tooltip;