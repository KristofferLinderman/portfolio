import landingPageImg from '../assets/landing-page.jpg';
import profilePageImg from '../assets/profile-page.png';
import todoListImg from '../assets/todo-list.png';

export type ProjectDataType = {
  name: string,
  description: string,
  img: string,
  github: string,
  url: string | null
}

export const ProjectData: ProjectDataType[] = [
  {
    name: 'ToDo List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    img: landingPageImg,
    github: 'string',
    url: 'string'
  },
  {
    name: 'Profile Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: profilePageImg,
    github: 'string',
    url: 'string'
  },
  {
    name: 'Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.',
    img: todoListImg,
    github: 'string',
    url: 'string'
  },
]