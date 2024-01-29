import React, {FC} from 'react';
import {SortItemProps} from "@/components/sortItem/SortItem.props";
import classNames from "classnames";

const SortItem: FC<SortItemProps> = ({ color, children }) => {
    return (
        <button className={classNames(['px-3 py-1 rounded-2xl font-medium'], {
            ['bg-white']: color === 'white',
            ['bg-transparent']: color === 'transparent'
        })}>
            {children}
        </button>
    );
};

export default SortItem