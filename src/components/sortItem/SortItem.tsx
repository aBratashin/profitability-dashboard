import React, {FC} from 'react';
import {SortItemProps} from "@/components/sortItem/SortItem.props";
import classNames from "classnames";

const SortItem: FC<SortItemProps> = ({ state, children }) => {
    return (
        <button className={classNames(['px-3 py-1 rounded-2xl font-medium'], {
            ['bg-white']: state === 'selected',
            ['bg-transparent']: state === 'default'
        })}>
            {children}
        </button>
    );
};

export default SortItem