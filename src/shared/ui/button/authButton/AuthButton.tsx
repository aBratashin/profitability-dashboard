import React, {FC} from 'react';
import Link from 'next/link';
import {cvaAuthButton} from '@/shared/ui/button/authButton/AuthButtonStyles';
import {AuthButtonProps} from '@/shared/ui/button/authButton/AuthButton.props';

const AuthButton: FC<AuthButtonProps> = () => {
    return (
        <Link className={cvaAuthButton()} style={{padding: 20}} href={'/dashboard'}>
            Авторизоваться через ClickUp
        </Link>
    );
};

export default AuthButton;