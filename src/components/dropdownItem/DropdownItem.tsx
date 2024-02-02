import React, { FC } from 'react';
import { DropdownItemProps } from '@/components/dropdownItem/DropdownItem.props';
import Image from 'next/image';
import classNames from 'classnames';

const DropdownItem: FC<DropdownItemProps> = ({
                                               selected,
                                               category,
                                               all,
                                               children,
                                               color,
                                               manager_id,
                                               circle_progress,
                                             }) => {
  return (
    <div>
      <div className=" min-w-[300px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {selected === 'yes' && (
            <Image
              src="./img/check-green.svg"
              width={20}
              height={20}
              alt="check-green"
              className="w-auto h-auto"
            />
          )}
          {all === 'yes' ? (
            <p className="text-sm font-medium">
              Все <span className="opacity-35">(default)</span>
            </p>
          ) : (
            <p className="text-sm font-medium">{children}</p>
          )}
        </div>
        <div>
          {category === 'manager' && (
            <div className="flex items-center">
              {all === 'yes' ? (
                <>
                  <Image
                    src="/img/manager_1.jpg"
                    width={24}
                    height={24}
                    alt="manager_1"
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/img/manager_2.jpg"
                    width={24}
                    height={24}
                    alt="manager_2"
                    className="rounded-full border-2 border-white m-[-8px]"
                  />
                  <Image
                    src="/img/manager_3.jpg"
                    width={24}
                    height={24}
                    alt="manager_3"
                    className="rounded-full border-2 border-white"
                  />
                </>
              ) : (
                <Image
                  src={`/img/manager_${manager_id}.jpg`}
                  width={24}
                  height={24}
                  alt="manager_1"
                  className="rounded-full border-2 border-white"
                />
              )}
            </div>
          )}
          {category === 'project' && (
            <div className="flex gap-1">
              {all === 'yes' ? (
                <>
                  <div className="w-3 h-3 bg-purple rounded-[3px]"></div>
                  <div className="w-3 h-3 bg-lightgreen rounded-[3px]"></div>
                  <div className="w-3 h-3 bg-pink rounded-[3px]"></div>
                  <div className="w-3 h-3 bg-blue rounded-[3px]"></div>
                  <div className="w-3 h-3 bg-red rounded-[3px]"></div>
                </>
              ) : (
                <div
                  className={classNames(['w-3 h-3 rounded-[3px]'], {
                    ['bg-purple']: color === 'purple',
                    ['bg-lightgreen']: color === 'lightgreen',
                    ['bg-pink']: color === 'pink',
                    ['bg-blue']: color === 'blue',
                    ['bg-red']: color === 'red',
                  })}
                ></div>
              )}
            </div>
          )}
          {category === 'pay_date' && (
            <div className="flex gap-2">
              {all === 'yes' ? (
                <>
                  <Image
                    src="./img/half-yellow.svg"
                    width={18}
                    height={18}
                    alt="half-yellow"
                  />
                  <Image
                    src="./img/half-red.svg"
                    width={18}
                    height={18}
                    alt="half-red"
                  />
                  <Image
                    src="./img/full-red.svg"
                    width={18}
                    height={18}
                    alt="full-red"
                  />
                </>
              ) : (
                <Image
                  src={`/img/${circle_progress}.svg`}
                  width={18}
                  height={18}
                  alt="full-red"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
