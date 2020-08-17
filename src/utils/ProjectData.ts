export type ProjectDataType = {
  name: string,
  description: string,
  img: string,
  github: string,
  viewUrl: string | null
}

export const ProjectData: ProjectDataType[] = [
  {
    name: 'ToDo List',
    description: 'Description for Project 1',
    img: 'todo-list.png',
    github: 'string',
    viewUrl: 'string'
  },
  {
    name: 'Profile Page',
    description: 'Description for Project 2',
    img: 'profile-page.png',
    github: 'string',
    viewUrl: 'string'
  },
  {
    name: 'Landing Page',
    description: 'Description for Landing Page',
    img: 'laning-page.jpg',
    github: 'string',
    viewUrl: 'string'
  },
]