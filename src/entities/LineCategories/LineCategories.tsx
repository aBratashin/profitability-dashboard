import React from 'react';
import {LineCategoriesProps} from '@/entities/LineCategories/LineCategories.props';

export const lineArray: React.ReactNode[] = (new Array(30).fill(
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
            <path d="M0.898438 0V12" stroke="#070707" strokeOpacity="0.24"/>
        </svg>)
);

export const LineCategories: LineCategoriesProps[] = [
    {id: 1, name: 'Сентябрь', lines: lineArray},
    {id: 2, name: 'Октябрь', lines: lineArray},
    {id: 3, name: 'Ноябрь', lines: lineArray},
];