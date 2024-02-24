import { cva } from 'class-variance-authority';

export const cvaPinning = cva(
  [
    'p-3 w-20 h-30 mr-[10px] bg-white rounded-3xl shadow-md flex items-center justify-center hover:cursor-pointer',
  ],
);

export const cvaPinningImage = cva(
  [
    'rounded-full',
  ],
);

export const cvaContainer = cva(
  [
    'flex w-full justify-between bg-white rounded-3xl shadow-md items-center hover:cursor-pointer px-5 py-3',
  ],
);

export const cvaTitle = cva(
  [
    'flex gap-3',
  ],
);

export const cvaTitleText = cva(
  [
    'text-3xl',
  ],
);

export const cvaTitleImage = cva(
  [
    'arrow-right-black',
  ],
);

export const cvaInfo = cva(
  [
    'flex gap-3 items-center',
  ],
);

export const cvaDate = cva(
  [
    'opacity-50 font-medium',
  ],
);

export const cvaImage = cva(
  [
    'rounded-full',
  ],
);