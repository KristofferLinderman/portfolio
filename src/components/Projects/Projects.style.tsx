import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  width: 30%;
  height: 50%;
  border-radius: 4px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;

  &:hover {
    border-radius: 20px;
    >div {
      position: absolute;
      width: inherit;
      height: inherit;
      display: block;
    }
  }
`;

export const ProjectInfoContainer = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: block;
  z-index: 99;
  /* display: none; */
  background-color: rgba(0,0,0,0.3);
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