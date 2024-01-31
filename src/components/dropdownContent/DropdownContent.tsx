import React, {FC} from 'react';
import {DropdownContentProps} from "@/components/dropdownContent/DropdownContent.props";
import DropdownItem from "@/components/dropdownItem/DropdownItem";

const DropdownContent: FC<DropdownContentProps> = ({type}) => {
    return (
        <div className='bg-white p-6 rounded-[32px] flex flex-col gap-4'>
            {type === 'manager' &&
                <div className='flex flex-col gap-4'>
                    <DropdownItem selected='no' category='manager' all='yes'></DropdownItem>
                    <DropdownItem selected='yes' category='manager' all='no' manager_id={1}>Елизавета
                        Которова</DropdownItem>
                    <DropdownItem selected='yes' category='manager' all='no' manager_id={2}>Дмитрий
                        Голиков</DropdownItem>
                    <DropdownItem selected='no' category='manager' all='no' manager_id={3}>Ксения
                        Гривская</DropdownItem>
                </div>
            }
            {type === 'project' &&
                <div className='flex flex-col gap-4'>
                    <DropdownItem selected='no' category='project' all='yes'></DropdownItem>
                    <DropdownItem selected='yes' category='project' all='no' color='purple'>Разработка
                        сайта</DropdownItem>
                    <DropdownItem selected='yes' category='project' all='no' color='lightgreen'>Разовые
                        работы</DropdownItem>
                    <DropdownItem selected='no' category='project' all='no' color='red'>T&M</DropdownItem>
                    <DropdownItem selected='no' category='project' all='no' color='blue'>Пакет часов</DropdownItem>
                    <DropdownItem selected='no' category='project' all='no' color='pink'>SEO</DropdownItem>
                </div>
            }
            {type === 'pay_date' &&
                <div className='flex flex-col gap-4'>
                    <DropdownItem selected='no' category='pay_date' all='yes'></DropdownItem>
                    <DropdownItem selected='yes' category='pay_date' all='no'
                                  circle_progress='full-red'>Просроченные</DropdownItem>
                    <DropdownItem selected='yes' category='pay_date' all='no' circle_progress='half-red'>На этой
                        неделе</DropdownItem>
                    <DropdownItem selected='no' category='pay_date' all='no' circle_progress='half-yellow'>На следующей
                        неделе</DropdownItem>
                </div>
            }
            <button className='min-w-[300px] mt-8 px-2.5 py-[18px] rounded-[16px] text-white bg-gray'>Показать <span
                className='opacity-35'>5</span></button>
        </div>
    );
};

export default DropdownContent