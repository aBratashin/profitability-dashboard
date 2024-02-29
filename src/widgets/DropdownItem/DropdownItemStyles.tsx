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

export const cvaSelectedImage = cva(
    [
        'w-[20px] h-[20px]',
    ],
);

export const cvaText = cva(
    [
        'text-sm font-medium',
    ],
);

export const cvaSubtext = cva(
    [
        'opacity-35',
    ],
);

export const cvaCategoryProjectPurple = cva(
    [
        'w-3 h-3 bg-purple rounded-[3px]',
    ],
);

export const cvaCategoryProjectLightgreen = cva(
    [
        'w-3 h-3 bg-lightgreen rounded-[3px]',
    ],
);

export const cvaCategoryProjectPink = cva(
    [
        'w-3 h-3 bg-pink rounded-[3px]',
    ],
);

export const cvaCategoryProjectBlue = cva(
    [
        'w-3 h-3 bg-blue rounded-[3px]',
    ],
);

export const cvaCategoryProjectRed = cva(
    [
        'w-3 h-3 bg-red rounded-[3px]',
    ],
);

export const cvaCategoryPaydateImg = cva(
    [
        'w-[18px] h-[18px]',
    ],
);