import styled from 'styled-components';
import { SPACING, FONT_SIZE } from '../utils/constants'
import { device } from '../utils/MediaQueries'

export const ContentContainer = styled.div<{ isOverlayOpen: boolean | undefined }>`
  padding: ${SPACING.SMALL} ${SPACING.XSMALL};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${props => props.isOverlayOpen ? 'pointer' : ''};


  @media ${device.laptop}{
    padding: ${SPACING.LARGE} ${SPACING.MEDIUM};
  }
`

export const CardTitle = styled.h1`
  font-size: ${FONT_SIZE.MEDIUM};
  line-height: ${FONT_SIZE.LARGE};
  padding-bottom: ${SPACING.SMALL};

  @media ${device.laptop}{  
    font-size: ${FONT_SIZE.LARGE};
  }
`
export const CardSubTitle = styled.h2`
  font-size: ${FONT_SIZE.SMALL};
  line-height: ${FONT_SIZE.LARGE};
  max-width: 70%;
  padding-bottom: ${SPACING.LARGE};

  @media ${device.tablet}{
    font-size: ${FONT_SIZE.MEDIUM};
  }
`
export const SignatureImg = styled.img`
  width: 33%;
`