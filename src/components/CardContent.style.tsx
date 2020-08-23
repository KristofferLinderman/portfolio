import styled from 'styled-components';
import { SPACING, FONT_SIZE } from '../utils/constants'

export const ContentContainer = styled.div<{ isOverlayOpen: boolean | undefined }>`
  padding: ${SPACING.LARGE} ${SPACING.MEDIUM};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${props => props.isOverlayOpen ? 'pointer' : ''};
`

export const CardTitle = styled.h1`
  font-size: ${FONT_SIZE.LARGE};
  line-height: ${FONT_SIZE.LARGE};
  text-transform: uppercase;
`
export const CardSubTitle = styled.h2`
  font-size: ${FONT_SIZE.MEDIUM};
  line-height: ${FONT_SIZE.LARGE};
  max-width: 70%;
  text-transform: uppercase;
  padding-bottom: ${SPACING.LARGE};
`
export const SignatureImg = styled.img`
  width: 33%;
`