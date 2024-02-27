import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex flex-col items-center h-screen gap-y-4',
    ],
);

export const cvaWrapper = cva(
    [
        'flex items-center gap-2 w-full p-4',
    ],
);

export const cvaCardInfo = cva(
    [
        'flex flex-col gap-2',
    ],
);
