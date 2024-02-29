import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex min-h-screen flex-col items-center justify-center p-24',
    ],
);

export const cvaWrapper = cva(
    [
        'bg-white p-24 flex flex-col gap-8 rounded-3xl',
    ],
);

export const cvaPersonInfo = cva(
    [
        'flex items-center justify-center',
    ],
);

export const cvaPersonImage = cva(
    [
        'mr-4 rounded-full',
    ],
);

export const cvaPersonTitle = cva(
    [
        'text-xl font-semibold text-center',
    ],
);

export const cvaClickUp = cva(
    [
        'flex flex-col gap-2.5 items-center',
    ],
);

export const cvaClickUpImage = cva(
    [
        'w-16 h-9',
    ],
);