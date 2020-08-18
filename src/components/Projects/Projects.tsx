import React from 'react'
import { ProjectData } from '../../utils/ProjectData';
import ProductCard from './ProjectCard';
import { ProjectsContainer } from './Projects.style'

const Projects = () => {

  return (
    <ProjectsContainer>
      {ProjectData.map((project, index) => <ProductCard key={index} project={project} />)}
    </ProjectsContainer>
  )
}

export default Projects
