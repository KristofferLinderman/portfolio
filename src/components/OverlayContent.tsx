import React, { useContext } from 'react'
import styled from 'styled-components';
import { COLORS } from '../utils/constants'
import Projects from './Projects/Projects'
import About from './About/About';
import Contact from './Contact/Contact';
import { OverlayContext } from '../OverlayContext';

const ContentContainer = styled.div`
  background-color: ${COLORS.OVERLAY_LIGHT};
  width: 85%;
  color: white;
  text-align: center;
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
      {getOverlay()}
    </ContentContainer>
  )
}

export default OverlayContent
