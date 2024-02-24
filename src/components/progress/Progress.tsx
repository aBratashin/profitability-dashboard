import React, { FC } from 'react';
import { ProgressProps } from '@/components/progress/Progress.props';
import classNames from 'classnames';
import { cvaContainer } from '@/components/category/CategoryStyles';
import {
  cvaCategory,
  cvaCategoryInfo,
  cvaCategoryInitial,
  cvaCategoryPlan,
  cvaCategoryPlanFinal,
  cvaCategoryPlanInfo,
  cvaGray,
  cvaGreen,
  cvaLightwhite,
  cvaRed,
  cvaWrapper,
} from '@/components/progress/ProgressStyles';

const Progress: FC<ProgressProps> = ({ category, color, initialData, finalData }) => {
  return (
    <div className={classNames([cvaContainer()], {
      [cvaLightwhite()]: color === 'white',
      [cvaGreen()]: color === 'green',
      [cvaRed()]: color === 'red',
    })}>
      <div className={classNames([cvaWrapper()], {
        [cvaGray()]: color === 'white',
      })}>
        <div className={cvaCategory()}>
          <span className={cvaCategoryInitial()}>{initialData}{category === 'profit' ? '%' : ' ч'}</span>
          <span className={cvaCategoryInfo()}>{category === 'profit' ? ' факт' : ' всего'}</span>
        </div>
        <div className={cvaCategoryPlan()}>
          <span className={cvaCategoryPlanFinal()}>{finalData}{category === 'profit' ? '%' : ' ч'}</span>
          <span className={cvaCategoryPlanInfo()}>{category === 'profit' ? ' план' : ' оценка'}</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;