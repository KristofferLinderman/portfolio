import React from 'react'
import styled from 'styled-components';
import { COLORS } from '../utils/constants'
import Projects from './Projects'

const ContentContainer = styled.div`
  background-color: ${COLORS.OVERLAY_LIGHT};
  width: 100%;
  color: white;
  text-align: center;
`

type OverlayContentProps = {
  overlayToShow: number
}

const OverlayContent: React.FC<OverlayContentProps> = ({ overlayToShow }) => {

  console.log('Showing overlay: #', overlayToShow);

  const getOverlay = () => {
    switch (overlayToShow) {
      case 1:
        return 'About'
      case 2:
        return 'Contact'

      default:
        return <Projects />
    }
  }

  return (
    <ContentContainer>
      {getOverlay()}
    </ContentContainer>
  )
}

export default OverlayContent
