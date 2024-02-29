import {cva} from 'class-variance-authority';

export const cvaCategoryManagerContainer = cva(
    [
        'flex items-center',
    ],
);

export const cvaCategoryManagers = cva(
    [
        'rounded-full border-2 border-white w-[24px] h-[24px]',
    ],
);