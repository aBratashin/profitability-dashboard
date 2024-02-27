import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'px-3 py-1 rounded-2xl border-2 font-medium',
    ],
);

export const cvaDev = cva(
    [
        'border-purple text-purple',
    ],
);

export const cvaSup = cva(
    [
        'border-lightgreen text-lightgreen',
    ],
);

export const cvaTm = cva(
    [
        'border-progressRed text-red',
    ],
);

export const cvaHours = cva(
    [
        'border-blue text-blue',
    ],
);

export const cvaSeo = cva(
    [
        'border-pink text-pink',
    ],
);