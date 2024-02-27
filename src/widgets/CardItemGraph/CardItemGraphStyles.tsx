import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'bg-back w-full min-w-[1115px] min-h-[300px] rounded-3xl flex items-center justify-center',
    ],
);

export const cvaWrapper = cva(
    [
        'max-w-[557px] max-h-[108px]',
    ],
);