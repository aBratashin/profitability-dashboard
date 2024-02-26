import React, { FC } from 'react';
import { ClearButtonProps } from '@/shared/ui/Button/clearButton/ClearButton.props';
import { cvaClearButton } from '@/shared/ui/Button/clearButton/ClearButtonStyles';

const ClearButton: FC<ClearButtonProps> = () => {
  return (
    <button className={cvaClearButton()} style={{padding: 12}}>
      Очистить
    </button>
  );
};

export default ClearButton;