import React, {FC} from 'react';
import {ProgressProps} from "@/components/progress/Progress.props";
import classNames from "classnames";

const Progress: FC<ProgressProps> = ({type, color, initialData, finalData}) => {
    return (
        <div className={classNames(['w-[162px] h-[65px] rounded-2xl'], {
            ['bg-progressWhite']: color === 'white',
            ['bg-progressGreen']: color === 'green',
            ['bg-progressRed']: color === 'red',
        })}>
            <div className={classNames(['text-white flex justify-between px-2 py-1'], {
                ['text-gray']: color === 'white'
            })}>
                <div className='flex flex-col'>
                    <span className='text-2xl font-medium'>{initialData}{type === 'plan' ? '%' : ' ч'}</span>
                    <span className='text-sm opacity-70'>{type === 'plan' ? ' факт' : ' всего'}</span>
                </div>
                <div className='flex flex-col pt-2'>
                    <span className='text-base'>{finalData}{type === 'plan' ? '%' : ' ч'}</span>
                    <span className='text-sm opacity-70'>{type === 'plan' ? ' план' : ' оценка'}</span>
                </div>
            </div>
        </div>
    );
};

export default Progress