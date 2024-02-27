import {cva} from 'class-variance-authority';

export const cvaContainer = cva(
    [
        'relative',
    ],
);

export const cvaInput = cva(
    [
        'min-h-10 min-w-[400px] rounded-[32px] py-2 px-4 outline-none border-2 border-transparent focus:border-2 focus:border-solid focus:border-black focus:border-opacity-35',
    ],
);

export const cvaButton = cva(
    [
        'absolute top-1.5 right-2 bg-[#898989] w-8 bg h-8 text-black rounded-full flex items-center justify-center',
    ],
);

export const cvaArrow = cva(
    [
        'w-5 h-5',
    ],
);

