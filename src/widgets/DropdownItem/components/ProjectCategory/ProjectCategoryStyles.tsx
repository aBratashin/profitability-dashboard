import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'min-w-[300px] flex items-center justify-between gap-4',
    ],
);

export const cvaWrapper = cva(
    [
        'flex items-center gap-4',
    ],
);

export const cvaCategoryProjectContainer = cva(
    [
        'flex gap-1',
    ],
);

export const cvaCategoryProjectGeneral = cva(
    [
        'w-3 h-3 rounded-[3px]',
    ],
);

export const cvaCategoryProjectGeneralPurple = cva(
    [
        'bg-purple',
    ],
);

export const cvaCategoryProjectGeneralLightgreen = cva(
    [
        'bg-lightgreen',
    ],
);

export const cvaCategoryProjectGeneralPink = cva(
    [
        'bg-pink',
    ],
);

export const cvaCategoryProjectGeneralBlue = cva(
    [
        'bg-blue',
    ],
);

export const cvaCategoryProjectGeneralRed = cva(
    [
        'bg-red',
    ],
);