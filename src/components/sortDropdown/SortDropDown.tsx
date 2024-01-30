import { FC } from 'react';
import { SortDropDownProps } from "@/components/sortDropdown/SortDropDown.props";
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

const SortDropDown: FC<SortDropDownProps> = ({ category }) => {

        const textType = getSortDropDownType(category)

    return (
        <button
            className='focus:bg-white px-1 py-1 gap-2.5 flex items-center rounded-full w-54 border-2 border-lightgray hover:border-gray hover:border-opacity-50'
        >
            <div
                className="max-w-[50px] opacity-50 text-white px-3 py-1 rounded-full bg-gray flex justify-center items-center">
                <p>Все</p>
            </div>
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