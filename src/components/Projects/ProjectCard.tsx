import React from 'react'
import { ProjectDataType } from '../../utils/ProjectData';
import { ProjectCardContainer, ProjectInfoContainer, ProjectImg } from './Projects.style'

type Project = {
  project: ProjectDataType
}

const ProjectCard: React.FC<Project> = ({ project }: Project): JSX.Element => {
  const { name, description, img } = project;

  return (
    <ProjectCardContainer >
      <ProjectInfoContainer>
        <p>{name}</p>
        <p>{description}</p>
      </ProjectInfoContainer>
      <ProjectImg src={img} alt="Project image" />
    </ProjectCardContainer>
  )
}

export default ProjectCard
