import React, { useContext } from 'react'
import styled from 'styled-components';
import { COLORS } from '../utils/constants'
import Projects from './Projects/Projects'
import About from './About/About';
import Contact from './Contact/Contact';
import { OverlayContext } from '../OverlayContext';
import CardMenu from './CardMenu';
import { device } from '../utils/MediaQueries'

const ContentContainer = styled.div`
  background-color: ${COLORS.OVERLAY_LIGHT};
  width: 100%;
  color: white;
  text-align: center;

  @media ${device.tablet} {
    width: 85%;
    height: auto;
  }
`

const OverlayContent: React.FC= () => {

  const overlayContext = useContext(OverlayContext);

  const getOverlay = () => {
    console.log('Overlay: ', overlayContext?.activeOverlay);
    
    switch (overlayContext?.activeOverlay) {
      case 1:
        return <About />
      case 2:
        return <Contact />

      default:
        return <Projects />
    }
  }

  return (
    <ContentContainer>
      <CardMenu />
      {getOverlay()}
    </ContentContainer>
  )
}

export default OverlayContent
