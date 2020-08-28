import styled from 'styled-components';
import { FONT_SIZE, SPACING } from '../../utils/constants'

export const ContactInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactLinkImg = styled.img`
  filter: brightness(0.1) invert(0.9);
  width: 10%;
  padding: ${SPACING.SMALL};
`;