import React, { FC } from 'react';
import { DropdownContentProps } from '@/components/dropdownContent/DropdownContent.props';
import DropdownItem from '@/components/dropdownItem/DropdownItem';
import { cvaButton, cvaContainer, cvaText, cvaType } from './DropdownContentStyles';

const DropdownContent: FC<DropdownContentProps> = ({ type }) => {
  return (
    <div className={cvaContainer()}>
      {type === 'manager' &&
        <div className={cvaType()}>
          <DropdownItem selected="no" category="manager" all="yes"></DropdownItem>
          <DropdownItem selected="yes" category="manager" all="no" src='/img/manager_1.jpg'>Елизавета
            Которова</DropdownItem>
          <DropdownItem selected="yes" category="manager" all="no" src='/img/manager_2.jpg'>Дмитрий
            Голиков</DropdownItem>
          <DropdownItem selected="no" category="manager" all="no" src='/img/manager_3.jpg'>Ксения
            Гривская</DropdownItem>
        </div>
      }
      {type === 'project' &&
        <div className={cvaType()}>
          <DropdownItem selected="no" category="project" all="yes"></DropdownItem>
          <DropdownItem selected="yes" category="project" all="no" color="purple">Разработка
            сайта</DropdownItem>
          <DropdownItem selected="yes" category="project" all="no" color="lightgreen">Разовые
            работы</DropdownItem>
          <DropdownItem selected="no" category="project" all="no" color="red">T&M</DropdownItem>
          <DropdownItem selected="no" category="project" all="no" color="blue">Пакет часов</DropdownItem>
          <DropdownItem selected="no" category="project" all="no" color="pink">SEO</DropdownItem>
        </div>
      }
      {type === 'pay_date' &&
        <div className={cvaType()}>
          <DropdownItem selected="no" category="pay_date" all="yes"></DropdownItem>
          <DropdownItem selected="yes" category="pay_date" all="no"
                        circle_progress="full-red">Просроченные</DropdownItem>
          <DropdownItem selected="yes" category="pay_date" all="no" circle_progress="half-red">На этой
            неделе</DropdownItem>
          <DropdownItem selected="no" category="pay_date" all="no" circle_progress="half-yellow">На следующей
            неделе</DropdownItem>
        </div>
      }
      <button className={cvaButton()}>Показать <span
        className={cvaText()}>5</span></button>
    </div>
  );
};

export default DropdownContent;