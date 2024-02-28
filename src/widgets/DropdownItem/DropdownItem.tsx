import React, { FC } from 'react';
import { DropdownItemProps, Images } from '@/widgets/DropdownItem/DropdownItem.props';
import Image from 'next/image';
import classNames from 'classnames';
import {
  cvaCategoryManagerContainer,
  cvaCategoryManagers,
  cvaCategoryPaydate,
  cvaCategoryPaydateImg,
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
} from './DropdownItemStyles';
import HalfYellow from '/public/img/half-yellow.svg';
import HalfRed from '/public/img/half-red.svg';
import FullRed from '/public/img/full-red.svg';

const images: Images = {
  manager: [
    { id: 1, src: '/img/manager_1.jpg', title: 'manager_1' },
    { id: 2, src: '/img/manager_2.jpg', title: 'manager_2' },
    { id: 3, src: '/img/manager_3.jpg', title: 'manager_3' },
  ],
  project: [
    { id: 1, item: <div className={cvaCategoryProjectPurple()}></div>, title: 'project_1' },
    { id: 2, item: <div className={cvaCategoryProjectLightgreen()}></div>, title: 'project_2' },
    { id: 3, item: <div className={cvaCategoryProjectPink()}></div>, title: 'project_3' },
    { id: 4, item: <div className={cvaCategoryProjectBlue()}></div>, title: 'project_4' },
    { id: 5, item: <div className={cvaCategoryProjectRed()}></div>, title: 'project_5' },
  ],
  payDate: [
    { id: 1, item: <HalfYellow className={cvaCategoryPaydateImg()} />, title: 'payDate_1' },
    { id: 2, item: <HalfRed className={cvaCategoryPaydateImg()} />, title: 'payDate_2' },
    { id: 3, item: <FullRed className={cvaCategoryPaydateImg()} />, title: 'payDate_3' },
  ],
};

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
                  {images.manager.map(el => (
                    <Image
                      key={el.id}
                      src={el.src}
                      width={24}
                      height={24}
                      alt={el.title}
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
                  {images.project.map(el => (
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
                  {images.payDate.map(el => (
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
