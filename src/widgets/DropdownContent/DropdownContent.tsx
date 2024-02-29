import React, {FC} from 'react';
import {DropdownContentProps} from '@/widgets/DropdownContent/DropdownContent.props';
import DropdownItem from '@/widgets/DropdownItem/DropdownItem';
import {cvaButton, cvaContainer, cvaText, cvaType} from './DropdownContentStyles';
import {ContentCategories} from '@/entities/ContentCategories/ContentCategories';

const DropdownContent: FC<DropdownContentProps> = ({buttonType}) => {
    const categoryData = ContentCategories[buttonType] || [];

    return (
        <div className={cvaContainer()}>
            {buttonType &&
                <div className={cvaType()}>
                    {categoryData.map(({id, label, ...restProps}) => (
                        <DropdownItem key={id} {...restProps}>
                            {label}
                        </DropdownItem>
                    ))}
                </div>
            }
            <button className={cvaButton()}>Показать <span className={cvaText()}>5</span></button>
        </div>
    );
};

export default DropdownContent;
