import React from 'react';

export interface ManagerItem {
    id: number;
    src: string;
    title: string;
}

interface ImageItem {
    id: number;
    item: React.JSX.Element;
    title: string;
}

export interface ItemCategoriesProps {
    manager: ManagerItem[];
    project: ImageItem[];
    payDate: ImageItem[];
}