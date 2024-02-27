import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex items-center gap-1',
    ],
);

export const cvaArrowContainer = cva(
    [
        'w-6 h-6 rounded-full bg-white flex items-center justify-center',
    ],
);

export const cvaArrow = cva(
    [
        'w-4 h-4',
    ],
);

export const cvaChildrenContainer = cva(
    [
        'text-xs text-gray bg-white rounded-3xl py-1 px-3 flex',
    ],
);

export const cvaChildren = cva(
    [
        'opacity-35 font-medium',
    ],
);
