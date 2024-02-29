import React, { FC } from 'react';
import { cvaSecondLineArray } from '@/widgets/Line/LineStyles';
import { LineCategoriesProps } from '@/entities/LineCategories/LineCategories.props';

export const renderMonth: FC<LineCategoriesProps> = (month) => (
  <React.Fragment key={month.id}>
    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
      <path d="M1.23828 0V22" stroke="#070707" strokeOpacity="0.24" />
    </svg>
    <div>{month.name}</div>
    <div className={cvaSecondLineArray()}>{month.lines.map((line, lineIndex) => <div
      key={lineIndex}>{line}</div>)}</div>
  </React.Fragment>
);