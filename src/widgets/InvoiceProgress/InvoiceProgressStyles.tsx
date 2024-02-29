import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'flex items-center',
    ],
);

export const cvaImage = cva(
    [
        'mr-1.5 w-auto h-auto',
    ],
);

export const cvaText = cva(
    [
        'text-gray opacity-35 text-md font-medium',
    ],
);

export const cvaSubtext = cva(
    [
        'text-green !opacity-100',
    ],
);

export const cvaTransitText = cva(
    [
        'text-yellow ml-2',
    ],
);