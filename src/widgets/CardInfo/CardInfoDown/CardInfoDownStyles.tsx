import {cva} from 'class-variance-authority';

export const cvaWrapper = cva(
    [
        'px-5 py-3 min-w-[500px] rounded-3xl bg-white font-medium',
    ],
);

export const cvaContainer = cva(
    [
        'flex justify-between',
    ],
);

export const cvaPrice = cva(
    [
        'text-3xl',
    ],
);

export const cvaRemains = cva(
    [
        'flex gap-1 opacity-50 font-medium',
    ],
);

export const cvaDateBlock = cva(
    [
        'mt-10',
    ],
);

export const cvaDateEnd = cva(
    [
        'flex gap-5',
    ],
);

export const cvaProgress = cva(
    [
        'flex flex-col justify-center gap-6',
    ],
);
