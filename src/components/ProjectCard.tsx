import React from 'react'
import { ProjectDataType } from '../utils/ProjectData';
import styled from 'styled-components';

import landingPage from '../assets/landing-page.jpg'

const ProjectCardContainer = styled.div`
  width: 30%;
  height: 50%;
  border-radius: 4px;
  background-color: #eee;
  margin: auto ;
`;

const ProjectInfoContainer = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 100%;
  display: none;
`;

const ProjectImg = styled.img`
  width: 300px;
  object-fit: fill;
`;

type Project = {
  key: number,
  project: ProjectDataType
}

const ProjectCard: React.FC<Project> = ({ key, project }: Project): JSX.Element => {
  console.log('creatiognm card for ',);

  const { name, description, img } = project;

  function getImgPath() {
    console.log('path: ', landingPage);

    return landingPage;
  }

  return (
    <ProjectCardContainer>
      <ProjectInfoContainer>
        <p>{name}</p>
        <p>{description}</p>
      </ProjectInfoContainer>
      <ProjectImg src={getImgPath()} alt="Project image" />
    </ProjectCardContainer>
  )
}

export default ProjectCard
