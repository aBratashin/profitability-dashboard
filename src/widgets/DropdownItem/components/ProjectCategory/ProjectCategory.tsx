import React, { FC } from 'react';
import classNames from 'classnames';
import {
  cvaCategoryProjectContainer,
  cvaCategoryProjectGeneral,
  cvaCategoryProjectGeneralBlue,
  cvaCategoryProjectGeneralLightgreen,
  cvaCategoryProjectGeneralPink,
  cvaCategoryProjectGeneralPurple,
  cvaCategoryProjectGeneralRed,
} from './ProjectCategoryStyles';
import { ProjectCategoryProps } from '@/widgets/DropdownItem/components/ProjectCategory/ProjectCategory.props';

const ProjectCategory: FC<ProjectCategoryProps> = ({ all, color, projectList }) => {
  return (
    <div className={cvaCategoryProjectContainer()}>
      {all === 'yes' ? (
        <>
          {projectList.map((el) => (
            <div key={el.id}>{el.item}</div>
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
  );
};

export default ProjectCategory;
