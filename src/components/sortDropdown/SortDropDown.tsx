import React, {FC} from 'react';
import {SortDropDownProps} from "@/components/sortDropdown/SortDropDown.props";
import Image from "next/image";

const getSortDropDownType = (category: SortDropDownProps['category']) => {
    if (category === 'manager') {
        return 'Менеджеры'
    } else if (category === 'project') {
        return 'Тип проекта'
    } else if (category === 'pay_date') {
        return 'Дата оплаты'
    }
}

const SortDropDown: FC<SortDropDownProps> = ({category, itemType}) => {

    const textType = getSortDropDownType(category)

    return (
        <button
            className='focus:bg-white px-1 py-1 gap-2.5 flex items-center rounded-full w-54 border-2 border-lightgray hover:border-gray hover:border-opacity-50'
        >
            {itemType === 'all' && <div
                className="max-w-[50px] opacity-50 text-white px-3 py-1 rounded-full bg-gray flex justify-center items-center">
                <p>Все</p>
            </div>}

            {category === 'manager' && itemType === 'default' &&
                <div className='flex items-center pl-2'>
                    <Image
                        src="/img/manager_1.jpg"
                        width={24}
                        height={24}
                        alt="manager_1"
                        className='rounded-full border-2 border-white'
                    />
                    <Image
                        src="/img/manager_2.jpg"
                        width={24}
                        height={24}
                        alt="manager_2"
                        className='rounded-full border-2 border-white ml-[-8px]'
                    />
                </div>}

            {category === 'project' && itemType === 'default' &&
                <div className='flex items-center gap-1 pl-2'>
                    <div className='w-3 h-3 bg-purple rounded-[3px]'></div>
                    <div className='w-3 h-3 bg-lightgreen rounded-[3px]'></div>
                </div>}

            {category === 'pay_date' && itemType === 'default' &&
                <div className='flex items-center gap-2 pl-2'>
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
                </div>}
            {textType}
            <Image
                src="/img/arrow-down.svg"
                width={24}
                height={24}
                alt="User"
                className="mr-4 rounded-full"
            />
        </button>
    )
}

export default SortDropDown