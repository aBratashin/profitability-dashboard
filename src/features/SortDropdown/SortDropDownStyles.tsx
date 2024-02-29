import {cva} from 'class-variance-authority';

export const cvaButtonContainer = cva(
    [
        'focus:bg-white px-1 py-2 gap-2.5 flex items-center rounded-full w-54 border-2 border-lightgray hover:border-gray hover:border-opacity-50 relative border-lightgray cursor-pointer',
    ],
);

export const cvaAll = cva(
    [
        'max-w-[50px] opacity-50 text-white px-3 py-1 ml-1 rounded-full bg-gray flex justify-center items-center',
    ],
);

export const cvaManager = cva(
    [
        'flex items-center pl-2',
    ],
);

export const cvaManagerOne = cva(
    [
        'rounded-full border-2 border-white',
    ],
);

export const cvaManagerTwo = cva(
    [
        'rounded-full border-2 border-white ml-[-8px]',
    ],
);

export const cvaProject = cva(
    [
        'flex items-center gap-1 pl-2',
    ],
);

export const cvaPurple = cva(
    [
        'w-3 h-3 bg-purple rounded-[3px]',
    ],
);

export const cvaLightgreen = cva(
    [
        'w-3 h-3 bg-lightgreen rounded-[3px]',
    ],
);

export const cvaPayDate = cva(
    [
        'flex items-center gap-2 pl-2',
    ],
);

export const cvaPayDateImg = cva(
    [
        'w-[18px] h-[18px]',
    ],
);

export const cvaOpen = cva(
    [
        'absolute top-[70px] left-[-60px]',
    ],
);
