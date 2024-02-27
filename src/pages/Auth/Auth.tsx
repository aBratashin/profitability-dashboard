import React from 'react';
import Image from 'next/image';
import ClickUp from '/public/img/clickUp.svg';
import AuthButton from "@/features/Button/AuthButton/AuthButton";
import {
    cvaClickUp,
    cvaClickUpImage,
    cvaContainer,
    cvaPersonImage,
    cvaPersonInfo,
    cvaPersonTitle,
    cvaWrapper
} from "@/app/styles/AuthStyles";

const Auth = () => {
    return (
        <main className={cvaContainer()}>
            <div className={cvaWrapper()}>
                <div className={cvaPersonInfo()}>
                    <Image
                        src="/img/Person.png"
                        width={64}
                        height={64}
                        alt="User"
                        className={cvaPersonImage()}
                    />
                    <p className={cvaPersonTitle()}>Егор Коротаев</p>
                </div>
                <div className={cvaClickUp()}>
                    <AuthButton/>
                    <ClickUp className={cvaClickUpImage()}/>
                </div>
            </div>
        </main>
    );
};

export default Auth;