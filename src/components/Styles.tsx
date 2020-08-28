import styled from 'styled-components';
import { FONT_SIZE, SPACING } from '../utils/constants'

export const FlexContainer = styled.div`
display: flex;
height: 100%;
`;

export const HeadShot = styled.img`
  padding: ${SPACING.MEDIUM};
  max-width: 40%;
  object-fit: cover;
`;

export const TextContainer = styled.p`
  color: white;
  font-size: ${FONT_SIZE.MEDIUM};
  line-height: ${SPACING.SMALL};
  text-align: left;
`;