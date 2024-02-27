import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex-col w-full justify-start items-start inline-flex px-6',
    ],
);

export const cvaFirstLineWrapper = cva(
    [
        'self-stretch items-center gap-4 inline-flex',
    ],
);

export const cvaFirstLineTitle = cva(
    [
        'text-sm',
    ],
);

export const cvaSecondLineWrapper = cva(
    [
        'flex items-center gap-4 w-full',
    ],
);

export const cvaSecondLineArray = cva(
    [
        'flex w-full justify-between',
    ],
);

export const cvaSecondLineTitle = cva(
    [
        'flex items-center gap-2',
    ],
);

export const cvaSecondLineText = cva(
    [
        'text-blue cursor-pointer',
    ],
);