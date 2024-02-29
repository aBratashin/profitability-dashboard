import React, {FC} from 'react';
import {StageItemProps} from '@/widgets/StageItem/StageItem.props';
import classNames from 'classnames';
import {
    cvaButtonContainer,
    cvaButtonGreen,
    cvaButtonRed,
    cvaButtonWhite,
    cvaButtonYellow,
    cvaChildren,
    cvaContainer,
    cvaItemContainer,
    cvaItemHours,
    cvaItemInfo,
    cvaPackageContainer,
    cvaPackageGreen,
    cvaPackageRed,
    cvaPackageWhite,
    cvaPackageYellow,
} from '@/widgets/StageItem/StageItemStyles';

const StageItem: FC<StageItemProps> = ({children, timeColor, profitColor, hours, percentage}) => {
    return (
        <div className={cvaContainer()}>
            <div className={classNames([cvaButtonContainer()], {
                [cvaButtonWhite()]: timeColor === 'white',
                [cvaButtonGreen()]: timeColor === 'green',
                [cvaButtonYellow()]: timeColor === 'yellow',
                [cvaButtonRed()]: timeColor === 'red',
            })}>
                <div className={cvaItemContainer()}>
                    <span className={cvaItemHours()}>{hours} ч</span>
                    <span className={cvaItemInfo()}>Всего</span>
                </div>
                <div className={cvaItemContainer()}>
                    <span className={cvaItemHours()}>{hours} ч</span>
                    <span className={cvaItemInfo()}>Оценка</span>
                </div>
            </div>
            <div className={classNames([cvaPackageContainer()], {
                [cvaPackageWhite()]: profitColor === 'white',
                [cvaPackageGreen()]: profitColor === 'green',
                [cvaPackageYellow()]: profitColor === 'yellow',
                [cvaPackageRed()]: profitColor === 'red',
            })}>
                <span>Пакет часов</span>
                <span>{percentage}%</span>
            </div>
            <div className={cvaChildren()}>{children}</div>
        </div>
    );
};

export default StageItem;