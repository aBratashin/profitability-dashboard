import React, {FC} from 'react';
import {ProgressProps} from "@/components/progress/Progress.props";
import classNames from "classnames";

const Progress: FC<ProgressProps> = ({category, color, initialData, finalData}) => {
    return (
        <div className={classNames(['w-[175px] h-[70px] rounded-2xl py-1 px-1'], {
            ['bg-lightwhite']: color === 'white',
            ['bg-green']: color === 'green',
            ['bg-red']: color === 'red',
        })}>
            <div className={classNames(['text-white flex justify-between px-2 py-1'], {
                ['!text-gray']: color === 'white',
            })}>
                <div className='flex flex-col'>
                    <span className='text-2xl font-medium'>{initialData}{category === 'profit' ? '%' : ' ч'}</span>
                    <span className='text-sm opacity-70'>{category === 'profit' ? ' факт' : ' всего'}</span>
                </div>
                <div className='flex flex-col pt-2'>
                    <span className='text-base font-medium'>{finalData}{category === 'profit' ? '%' : ' ч'}</span>
                    <span className='text-sm opacity-70'>{category === 'profit' ? ' план' : ' оценка'}</span>
                </div>
            </div>
        </div>
    );
};

export default Progress