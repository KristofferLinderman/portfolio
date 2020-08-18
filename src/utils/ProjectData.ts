import landingPageImg from '../assets/landing-page.jpg';
import profilePageImg from '../assets/profile-page.png';
import todoListImg from '../assets/todo-list.png';

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
    img: landingPageImg,
    github: 'string',
    viewUrl: 'string'
  },
  {
    name: 'Profile Page',
    description: 'Description for Project 2',
    img: profilePageImg,
    github: 'string',
    viewUrl: 'string'
  },
  {
    name: 'Landing Page',
    description: 'Description for Landing Page',
    img: todoListImg,
    github: 'string',
    viewUrl: 'string'
  },
]