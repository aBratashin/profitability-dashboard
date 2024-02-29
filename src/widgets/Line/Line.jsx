import React from 'react';
import {
    cvaContainer,
    cvaFirstLineTitle,
    cvaFirstLineWrapper,
    cvaSecondLineText,
    cvaSecondLineTitle,
    cvaSecondLineWrapper,
} from '@/widgets/Line/LineStyles';
import ArrowRightBlue from '@/shared/ui/Arrow/ArrowRightBlue/ArrowRightBlue';
import {LineCategories} from '@/entities/LineCategories/LineCategories';
import {renderMonth} from '@/widgets/Line/helpers/LineHelpers';

const Line = () => {
    return (
        <div className={cvaContainer()}>
            <div className={cvaFirstLineWrapper()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
                    <path d="M0 1H112" stroke="#070707" strokeOpacity="0.12"/>
                </svg>
                <div className={cvaFirstLineTitle()}>2023</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1454 2" fill="none">
                    <path d="M0 1H1454" stroke="#070707" strokeOpacity="0.12"/>
                </svg>
            </div>

            <div className={cvaSecondLineWrapper()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
                    <path d="M0.898438 0V12" stroke="#070707" strokeOpacity="0.24"/>
                </svg>

                {LineCategories.map((month) => renderMonth(month))}

                <div className={cvaSecondLineTitle()}>
                    <div className={cvaSecondLineText()}>Сегодня</div>
                    <ArrowRightBlue/>
                </div>
            </div>
        </div>
    );
};

export default Line;
