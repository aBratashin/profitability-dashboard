import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'bg-white p-6 rounded-[32px] flex flex-col gap-4',
    ],
);

export const cvaType = cva(
    [
        'flex flex-col gap-4',
    ],
);

export const cvaButton = cva(
    [
        'min-w-[300px] mt-8 px-2.5 py-[18px] rounded-[16px] text-white bg-gray',
    ],
);

export const cvaText = cva(
    [
        'opacity-35',
    ],
);