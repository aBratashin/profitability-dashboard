import React, { FC } from 'react';
import { DropdownItemProps } from '@/widgets/DropdownItem/DropdownItem.props';
import Image from 'next/image';
import { cvaContainer, cvaSelectedImage, cvaSubtext, cvaText, cvaWrapper } from './DropdownItemStyles';
import { ItemCategories } from '@/entities/ItemCategories/ItemCategories';
import ManagerCategory from '@/widgets/DropdownItem/components/ManagerCategory/ManagerCategory';
import ProjectCategory from '@/widgets/DropdownItem/components/ProjectCategory/ProjectCategory';
import PayDateCategory from '@/widgets/DropdownItem/components/PayDateCategory/PayDateCategory';


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
            <ManagerCategory all={all} src={src} managerList={ItemCategories.manager} />
          )}
          {category === 'project' && (
            <ProjectCategory all={all} color={color} projectList={ItemCategories.project} />
          )}
          {category === 'pay_date' && (
            <PayDateCategory all={all} src={src} payDateList={ItemCategories.payDate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
