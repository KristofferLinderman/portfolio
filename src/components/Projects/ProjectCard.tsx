import React from 'react';
import { ProjectDataType } from '../../contentData/ProjectData';
import { ProjectCardContainer, ProjectInfoContainer, ProjectImg, ProjectTitle, LinkContainer, ProjectDescription } from './Projects.style';
import { ReactComponent as GithubLogo } from '../../assets/icons/github.svg'
import { ReactComponent as WebsiteLogo } from '../../assets/icons/web.svg'

type ProjectCardProps = {
  project: ProjectDataType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: ProjectCardProps): JSX.Element => {
  const { name, description, img } = project;

  return (
    <ProjectCardContainer >
      <ProjectInfoContainer>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <LinkContainer>
          <a href="http://github.com">
            <GithubLogo />
          </a>
          <a href="http://dribbble.com">
            <WebsiteLogo />
          </a>
        </LinkContainer>
      </ProjectInfoContainer>
      <ProjectImg src={img} alt="Project image" />
    </ProjectCardContainer>
  )
}

export default ProjectCard
