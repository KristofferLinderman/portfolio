import React from 'react'
import styled from 'styled-components';
import { ProjectData } from '../utils/ProjectData';
import ProductCard from './ProjectCard';

const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Projects = () => {

  return (
    <ProjectsContainer>
      {ProjectData.map((project, index) => <ProductCard key={index} project={project} />)}
    </ProjectsContainer>
  )
}

export default Projects
