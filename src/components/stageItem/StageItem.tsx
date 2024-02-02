import React, { FC } from 'react';
import { StageItemProps } from '@/components/stageItem/StageItem.props';
import classNames from 'classnames';

const StageItem: FC<StageItemProps> = ({ children, timeColor, profitColor, hours, percentage }) => {
  return (
    <div className="min-w-[280px] flex flex-col gap-1">
      <div className={classNames(['w-full rounded-xl flex justify-between p-2'], {
        ['bg-lightgray text-gray']: timeColor === 'white',
        ['bg-green text-white']: timeColor === 'green',
        ['bg-[#FFDB6C] text-gray']: timeColor === 'yellow',
        ['bg-red text-white']: timeColor === 'red',
      })}>
        <div className="flex flex-col">
          <span className="font-medium text-2xl">{hours} ч</span>
          <span className="text-xs text-lightwhite">Всего</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-2xl">{hours} ч</span>
          <span className="text-xs text-lightwhite">Оценка</span>
        </div>
      </div>
      <div className={classNames(['w-full rounded-xl flex justify-between px-2 py-0.5 font-medium'], {
        ['bg-lightgray text-gray']: profitColor === 'white',
        ['bg-green text-white']: profitColor === 'green',
        ['bg-[#FFDB6C] text-gray']: profitColor === 'yellow',
        ['bg-red text-white']: profitColor === 'red',
      })}>
        <span>Пакет часов</span>
        <span>{percentage}%</span>
      </div>
      <div className="self-end">{children}</div>
    </div>
  );
};

export default StageItem;