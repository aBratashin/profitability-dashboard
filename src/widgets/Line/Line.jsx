import React from 'react';
import ArrowRight from '/public/img/arrow-right.svg';
import {
  cvaContainer,
  cvaFirstLineTitle,
  cvaFirstLineWrapper,
  cvaSecondLineArray,
  cvaSecondLineText,
  cvaSecondLineTitle,
  cvaSecondLineWrapper,
} from '@/widgets/Line/LineStyles';

const Line = () => {
  const lineArray = (new Array(30).fill(
      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
        <path d="M0.898438 0V12" stroke="#070707" strokeOpacity="0.24" />
      </svg>)
  );

  const monthsData = [
    { id: 1, name: 'Сентябрь', lines: lineArray },
    { id: 2, name: 'Октябрь', lines: lineArray },
    { id: 3, name: 'Ноябрь', lines: lineArray },
  ];

  const renderMonth = (month) => (
    <React.Fragment key={month.id}>
      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
        <path d="M1.23828 0V22" stroke="#070707" strokeOpacity="0.24" />
      </svg>
      <div>{month.name}</div>
      <div className={cvaSecondLineArray()}>{month.lines.map((line, lineIndex) => <div
        key={lineIndex}>{line}</div>)}</div>
    </React.Fragment>
  );

  return (
    <div className={cvaContainer()}>
      <div className={cvaFirstLineWrapper()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
          <path d="M0 1H112" stroke="#070707" strokeOpacity="0.12" />
        </svg>
        <div className={cvaFirstLineTitle()}>2023</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1454 2" fill="none">
          <path d="M0 1H1454" stroke="#070707" strokeOpacity="0.12" />
        </svg>
      </div>

      <div className={cvaSecondLineWrapper()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
          <path d="M0.898438 0V12" stroke="#070707" strokeOpacity="0.24" />
        </svg>

        {monthsData.map((month) => renderMonth(month))}

        <div className={cvaSecondLineTitle()}>
          <div className={cvaSecondLineText()}>Сегодня</div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Line;
