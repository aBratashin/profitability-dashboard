import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex items-center justify-between w-screen px-6 py-6',
    ],
);

export const cvaHeaderTitle = cva(
    [
        'text-5xl font-medium',
    ],
);

export const cvaHeaderWrapper = cva(
    [
        'flex gap-6 items-center',
    ],
);