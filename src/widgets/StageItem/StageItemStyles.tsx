import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'min-w-[280px] flex flex-col gap-1',
    ],
);

export const cvaButtonContainer = cva(
    [
        'w-full rounded-xl flex justify-between p-2',
    ],
);

export const cvaButtonWhite = cva(
    [
        'bg-lightgray text-gray',
    ],
);

export const cvaButtonGreen = cva(
    [
        'bg-green text-white',
    ],
);

export const cvaButtonYellow = cva(
    [
        'bg-[#FFDB6C] text-gray',
    ],
);

export const cvaButtonRed = cva(
    [
        'bg-red text-white',
    ],
);

export const cvaItemContainer = cva(
    [
        'flex flex-col',
    ],
);

export const cvaItemHours = cva(
    [
        'font-medium text-2xl',
    ],
);

export const cvaItemInfo = cva(
    [
        'text-xs text-lightwhite',
    ],
);

export const cvaPackageContainer = cva(
    [
        'w-full rounded-xl flex justify-between px-2 py-0.5 font-medium',
    ],
);

export const cvaPackageWhite = cva(
    [
        'bg-lightgray text-gray',
    ],
);


export const cvaPackageGreen = cva(
    [
        'bg-green text-white',
    ],
);

export const cvaPackageYellow = cva(
    [
        'bg-[#FFDB6C] text-gray',
    ],
);

export const cvaPackageRed = cva(
    [
        'bg-red text-white',
    ],
);

export const cvaChildren = cva(
    [
        'self-end',
    ],
);
