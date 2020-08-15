export interface ProjectDataType {
  name:string,
  description: string,
  img: string,
  github: string,
  viewUrl: string|null
}

export const ProjectData: ProjectDataType[] = [
  {  name:'Project 1',
    description: 'Description for Project 1',
    img: 'string',
    github: 'string',
    viewUrl: 'string'
  },
  {  name:'Project 2',
    description: 'Description for Project 2',
    img: 'string',
    github: 'string',
    viewUrl: 'string'
  },
  {  name:'Project 3',
    description: 'Description for Project 3',
    img: 'string',
    github: 'string',
    viewUrl: 'string'
  },
]