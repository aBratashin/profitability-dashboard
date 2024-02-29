import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'w-[175px] h-[70px] rounded-2xl py-1 px-1',
    ],
);

export const cvaLightwhite = cva(
    [
        'bg-lightwhite',
    ],
);

export const cvaGreen = cva(
    [
        'bg-green',
    ],
);

export const cvaRed = cva(
    [
        'bg-red',
    ],
);

export const cvaWrapper = cva(
    [
        'text-white flex justify-between px-2 py-1',
    ],
);

export const cvaGray = cva(
    [
        '!text-gray',
    ],
);

export const cvaCategory = cva(
    [
        'flex flex-col',
    ],
);

export const cvaCategoryInitial = cva(
    [
        'text-2xl font-medium',
    ],
);

export const cvaCategoryInfo = cva(
    [
        'text-sm opacity-70',
    ],
);

export const cvaCategoryPlan = cva(
    [
        'flex flex-col pt-2',
    ],
);

export const cvaCategoryPlanFinal = cva(
    [
        'text-base font-medium',
    ],
);

export const cvaCategoryPlanInfo = cva(
    [
        'text-sm opacity-70',
    ],
);
