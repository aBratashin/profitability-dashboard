import React, { FC } from 'react';
import { DropdownItemProps } from '@/components/dropdownItem/DropdownItem.props';
import Image from 'next/image';
import classNames from 'classnames';
import {
  cvaCategoryManagerContainer,
  cvaCategoryManagers,
  cvaCategoryManagerTwo,
  cvaCategoryPaydate,
  cvaCategoryProjectBlue,
  cvaCategoryProjectContainer,
  cvaCategoryProjectGeneral,
  cvaCategoryProjectGeneralBlue,
  cvaCategoryProjectGeneralLightgreen,
  cvaCategoryProjectGeneralPink,
  cvaCategoryProjectGeneralPurple,
  cvaCategoryProjectGeneralRed,
  cvaCategoryProjectLightgreen,
  cvaCategoryProjectPink,
  cvaCategoryProjectPurple,
  cvaCategoryProjectRed,
  cvaContainer,
  cvaSelectedImage,
  cvaSubtext,
  cvaText,
  cvaWrapper,
  cvaCategoryPaydateImg
} from './DropdownItemStyles';
import HalfYellow from '/public/img/half-yellow.svg'
import HalfRed from '/public/img/half-red.svg'
import FullRed from '/public/img/full-red.svg'

const DropdownItem: FC<DropdownItemProps> = ({
                                               selected,
                                               category,
                                               all,
                                               children,
                                               color,
                                               src,
                                               circle_progress,
                                             }) => {
  return (
    <div>
      <div className={cvaContainer()}>
        <div className={cvaWrapper()}>
          {selected === 'yes' && (
            <Image
              src="./img/check-green.svg"
              width={20}
              height={20}
              alt="check-green"
              className={cvaSelectedImage()}
            />
          )}
          {all === 'yes' ? (
            <p className={cvaText()}>
              Все <span className={cvaSubtext()}>(default)</span>
            </p>
          ) : (
            <p className={cvaText()}>{children}</p>
          )}
        </div>
        <div>
          {category === 'manager' && (
            <div className={cvaCategoryManagerContainer()}>
              {all === 'yes' ? (
                <>
                  <Image
                    src="/img/manager_1.jpg"
                    width={24}
                    height={24}
                    alt="manager_1"
                    className={cvaCategoryManagers()}
                  />
                  <Image
                    src="/img/manager_2.jpg"
                    width={24}
                    height={24}
                    alt="manager_2"
                    className={cvaCategoryManagerTwo()}
                  />
                  <Image
                    src="/img/manager_3.jpg"
                    width={24}
                    height={24}
                    alt="manager_3"
                    className={cvaCategoryManagers()}
                  />
                </>
              ) : (
                <Image
                  src={src || ''}
                  width={24}
                  height={24}
                  alt="manager_1"
                  className={cvaCategoryManagers()}
                />
              )}
            </div>
          )}
          {category === 'project' && (
            <div className={cvaCategoryProjectContainer()}>
              {all === 'yes' ? (
                <>
                  <div className={cvaCategoryProjectPurple()}></div>
                  <div className={cvaCategoryProjectLightgreen()}></div>
                  <div className={cvaCategoryProjectPink()}></div>
                  <div className={cvaCategoryProjectBlue()}></div>
                  <div className={cvaCategoryProjectRed()}></div>
                </>
              ) : (
                <div
                  className={classNames([cvaCategoryProjectGeneral()], {
                    [cvaCategoryProjectGeneralPurple()]: color === 'purple',
                    [cvaCategoryProjectGeneralLightgreen()]: color === 'lightgreen',
                    [cvaCategoryProjectGeneralPink()]: color === 'pink',
                    [cvaCategoryProjectGeneralBlue()]: color === 'blue',
                    [cvaCategoryProjectGeneralRed()]: color === 'red',
                  })}
                ></div>
              )}
            </div>
          )}
          {category === 'pay_date' && (
            <div className={cvaCategoryPaydate()}>
              {all === 'yes' ? (
                <>
                  <HalfYellow className={cvaCategoryPaydateImg()} />
                  <HalfRed className={cvaCategoryPaydateImg()} />
                  <FullRed className={cvaCategoryPaydateImg()} />
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
