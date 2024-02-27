import React, {FC} from 'react';
import {ClearButtonProps} from '@/features/Button/ClearButton/ClearButton.props';
import {cvaClearButton} from '@/features/Button/ClearButton/ClearButtonStyles';

const ClearButton: FC<ClearButtonProps> = () => {
    return (
        <button className={cvaClearButton()} style={{padding: 12}}>
            Очистить
        </button>
    );
};

export default ClearButton;