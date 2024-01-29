import React, {FC} from 'react';
import {CategoryProps} from "@/components/category/Category.props";
import classNames from "classnames";

const Category: FC<CategoryProps> = ({ color, children }) => {
    return (
            <button className={classNames(['px-3 py-1 rounded-2xl border-2 font-medium'], {
                ['border-purple text-purple']: color === 'purple',
                ['border-lightgreen text-lightgreen']: color === 'lightgreen',
                ['border-progressRed text-progressRed']: color === 'progressRed',
                ['border-blue text-blue']: color === 'blue',
                ['border-pink text-pink']: color === 'pink',
            })}>
                {children}
            </button>
    )
}

export default Category