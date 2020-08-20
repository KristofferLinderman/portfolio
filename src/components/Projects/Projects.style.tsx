import styled from 'styled-components';
import { FONT_SIZE, COLORS, SPACING } from '../../utils/constants'

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
      opacity: 1;
    }
  }
`;

export const ProjectImg = styled.img`
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const ProjectInfoContainer = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
  background-color: rgba(0,0,0,0.7);
  transition: opacity 0.3s ease-in-out;

  & svg{
    fill: ${COLORS.SECONDARY_LIGHT};
    width: 50px;
    height: 50px;
    transition: all 0.3s ease-in-out;

    &:hover {
      fill: ${COLORS.CARD_LIGHT};
      transform: scale(1.1);
    }
  }
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
  margin-top: ${SPACING.SMALL};
`;

export const ProjectDescription = styled.p`
  font-size: ${FONT_SIZE.SMALL};
  margin: 0 ${SPACING.XSMALL};
`;

export const LinkContainer = styled.div`
  display: flex;
  padding: 0 20%;
  justify-content: space-evenly;
  margin-bottom: ${SPACING.XSMALL}
`;