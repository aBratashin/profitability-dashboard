import React, { FC } from 'react';
import { DropdownItemProps } from '@/widgets/DropdownItem/DropdownItem.props';
import Image from 'next/image';
import classNames from 'classnames';
import {
  cvaCategoryManagerContainer,
  cvaCategoryManagers,
  cvaCategoryPaydate,
  cvaCategoryProjectContainer,
  cvaCategoryProjectGeneral,
  cvaCategoryProjectGeneralBlue,
  cvaCategoryProjectGeneralLightgreen,
  cvaCategoryProjectGeneralPink,
  cvaCategoryProjectGeneralPurple,
  cvaCategoryProjectGeneralRed,
  cvaContainer,
  cvaSelectedImage,
  cvaSubtext,
  cvaText,
  cvaWrapper,
} from './DropdownItemStyles';
import { ItemCategories } from '@/entities/ItemCategories/ItemCategories';


const DropdownItem: FC<DropdownItemProps> = ({
                                               selected,
                                               category,
                                               all,
                                               children,
                                               color,
                                               src,
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
              loading={'eager'}
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
                  {ItemCategories.manager.map(el => (
                    <Image
                      key={el.id}
                      src={el.src}
                      width={24}
                      height={24}
                      alt={el.title}
                      loading={'eager'}
                      className={cvaCategoryManagers()}
                    />
                  ))}
                </>
              ) : (
                <Image
                  src={src || '/img/manager_1.jpg'}
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
                  {ItemCategories.project.map(el => (
                    <div>
                      {el.item}
                    </div>
                  ))}
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
                  {ItemCategories.payDate.map(el => (
                    <div key={el.id}>
                      {el.item}
                    </div>
                  ))}
                </>
              ) : (
                <Image
                  src={src || `/img/full-red.svg`}
                  width={18}
                  height={18}
                  alt="full-red"
                  loading={'eager'}
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
