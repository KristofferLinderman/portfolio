import React from 'react';
import { ProjectDataType } from '../../utils/ProjectData';
import { ProjectCardContainer, ProjectInfoContainer, ProjectImg, ProjectTitle } from './Projects.style';

type ProjectCardProps = {
  project: ProjectDataType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: ProjectCardProps): JSX.Element => {
  const { name, description, img } = project;

  return (
    <ProjectCardContainer >
      <ProjectInfoContainer>
        <ProjectTitle>{name}</ProjectTitle>
        <p>{description}</p>
      </ProjectInfoContainer>
      <ProjectImg src={img} alt="Project image" />
    </ProjectCardContainer>
  )
}

export default ProjectCard
