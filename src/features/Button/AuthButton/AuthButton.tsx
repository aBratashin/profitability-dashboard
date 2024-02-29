import React, {FC} from 'react';
import Link from 'next/link';
import {cvaAuthButton} from '@/features/Button/AuthButton/AuthButtonStyles';
import {AuthButtonProps} from '@/features/Button/AuthButton/AuthButton.props';

const AuthButton: FC<AuthButtonProps> = () => {
    return (
        <Link className={cvaAuthButton()} href={'/dashboard'}>
            Авторизоваться через ClickUp
        </Link>
    );
};

export default AuthButton;