import React from 'react';
import { ProjectDataType } from '../../utils/ProjectData';
import { ProjectCardContainer, ProjectInfoContainer, ProjectImg, ProjectTitle, LinkContainer } from './Projects.style';
import {ReactComponent as GithubLogo} from '../../assets/github.svg'
import {ReactComponent as WebsiteLogo} from '../../assets/web.svg'

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
        <LinkContainer>
        <a href="http://github.com">
          <GithubLogo/>
        </a>
        <a href="http://dribbble.com">
          <WebsiteLogo/>
        </a>
        </LinkContainer>
      </ProjectInfoContainer>
      <ProjectImg src={img} alt="Project image" />
    </ProjectCardContainer>
  )
}

export default ProjectCard
