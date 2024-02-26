import React, {FC} from 'react';
import {CategoryProps} from '@/components/Category/Category.props';
import classNames from 'classnames';
import {cvaContainer, cvaDev, cvaHours, cvaSeo, cvaSup, cvaTm} from "./CategoryStyles";


const getCategoryType = (type: CategoryProps['type']) => {
    if (type === 'dev') {
        return 'Разработка сайта';
    } else if (type === 'sup') {
        return 'Разовые работы';
    } else if (type === 'T&M') {
        return 'T&M';
    } else if (type === 'hours') {
        return 'Пакет часов';
    } else if (type === 'seo') {
        return 'SEO';
    }
};

const Category: FC<CategoryProps> = ({type}) => {

    const textType = getCategoryType(type);

    return (
        <div className={classNames([cvaContainer()], {
            [cvaDev()]: type === 'dev',
            [cvaSup()]: type === 'sup',
            [cvaTm()]: type === 'T&M',
            [cvaHours()]: type === 'hours',
            [cvaSeo()]: type === 'seo',
        })}>
            {textType}
        </div>
    );
};

export default Category;
