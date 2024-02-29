import React, { FC } from 'react';
import Image from 'next/image';
import { cvaCategoryPaydate } from './PayDateCategoryStyles';
import { PayDateCategoryProps } from '@/widgets/DropdownItem/components/PayDateCategory/PayDateCategory.props';

const PayDateCategory: FC<PayDateCategoryProps> = ({ all, src, payDateList }) => {
  return (
    <div className={cvaCategoryPaydate()}>
      {all === 'yes' ? (
        <>
          {payDateList.map((el) => (
            <div key={el.id}>{el.item}</div>
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
  );
};

export default PayDateCategory;
