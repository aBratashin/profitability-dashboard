import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex flex-col items-center',
    ],
);

export const cvaWrapper = cva(
    [
        'font-medium text-base p-2.5 bg-gray rounded-lg',
    ],
);

export const cvaType = cva(
    [
        'text-white',
    ],
);

export const cvaIcon = cva(
    [
        'w-7 h-[14]',
    ],
);