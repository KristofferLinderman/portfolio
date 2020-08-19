import styled from 'styled-components';
import { FONT_SIZE } from '../../utils/constants'

export const ProjectCardContainer = styled.div`
  width: 30%;
  height: 50%;
  border-radius: 4px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &:hover {
    >div {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

export const ProjectInfoContainer = styled.div`
  z-index: 99;
  display: none;
  background-color: rgba(0,0,0,0.7);
`;

export const ProjectImg = styled.img`
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: space-evenly;
`;

export const ProjectTitle = styled.h1`
  font-size: ${FONT_SIZE.LARGE};
`;