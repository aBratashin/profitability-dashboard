import { cva } from 'class-variance-authority';

export const cvaContainer = cva(
  [
    'min-w-[300px] flex items-center justify-between gap-4',
  ],
);

export const cvaWrapper = cva(
  [
    'flex items-center gap-4',
  ],
);

export const cvaSelectedImage = cva(
  [
    'w-auto h-auto',
  ],
);

export const cvaText = cva(
  [
    'text-sm font-medium',
  ],
);

export const cvaSubtext = cva(
  [
    'opacity-35',
  ],
);

export const cvaCategoryManagerContainer = cva(
  [
    'flex items-center',
  ],
);

export const cvaCategoryManagers = cva(
  [
    'rounded-full border-2 border-white',
  ],
);

export const cvaCategoryManagerTwo = cva(
  [
    'rounded-full border-2 border-white m-[-8px]',
  ],
);

export const cvaCategoryProjectContainer = cva(
  [
    'flex gap-1',
  ],
);

export const cvaCategoryProjectPurple = cva(
  [
    'w-3 h-3 bg-purple rounded-[3px]',
  ],
);

export const cvaCategoryProjectLightgreen = cva(
  [
    'w-3 h-3 bg-lightgreen rounded-[3px]',
  ],
);

export const cvaCategoryProjectPink = cva(
  [
    'w-3 h-3 bg-pink rounded-[3px]',
  ],
);

export const cvaCategoryProjectBlue = cva(
  [
    'w-3 h-3 bg-blue rounded-[3px]',
  ],
);

export const cvaCategoryProjectRed = cva(
  [
    'w-3 h-3 bg-red rounded-[3px]',
  ],
);

export const cvaCategoryProjectGeneral = cva(
  [
    'w-3 h-3 rounded-[3px]',
  ],
);

export const cvaCategoryProjectGeneralPurple = cva(
  [
    'bg-purple',
  ],
);

export const cvaCategoryProjectGeneralLightgreen = cva(
  [
    'bg-lightgreen',
  ],
);

export const cvaCategoryProjectGeneralPink = cva(
  [
    'bg-pink',
  ],
);

export const cvaCategoryProjectGeneralBlue = cva(
  [
    'bg-blue',
  ],
);

export const cvaCategoryProjectGeneralRed = cva(
  [
    'bg-red',
  ],
);

export const cvaCategoryPaydate = cva(
  [
    'flex gap-2',
  ],
);

export const cvaCategoryPaydateImg = cva(
  [
    'w-[18px] h-[18px]',
  ],
);