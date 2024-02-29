import React, {FC} from 'react';
import Image from 'next/image';
import {cvaCategoryManagerContainer, cvaCategoryManagers} from './ManagerCategoryStyles';
import {ManagerCategoryProps} from '@/widgets/DropdownItem/components/ManagerCategory/ManagerCategory.props';

const ManagerCategory: FC<ManagerCategoryProps> = ({all, src, managerList}) => {
    return (
        <div className={cvaCategoryManagerContainer()}>
            {all === 'yes' ? (
                <>
                    {managerList.map((el) => (
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
                    loading={'eager'}
                    className={cvaCategoryManagers()}
                />
            )}
        </div>
    );
};

export default ManagerCategory;
