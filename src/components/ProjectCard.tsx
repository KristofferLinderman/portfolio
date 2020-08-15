import React from 'react'
import { ProjectDataType } from '../utils/ProjectData';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  width: 30%;
  height: 50%;
  border-radius: 4px;
  background-color: #eee;
  margin: auto ;
`;

const ProjectCard = (props: { project: ProjectDataType }) => {
  console.log('creatiognm card for ',);

  console.log(props.project);
  const { name, description } = props.project;

  return (
    <ProjectCardContainer>
      <p>{name}</p>
      <p>{description}</p>
    </ProjectCardContainer>
  )
}

export default ProjectCard
