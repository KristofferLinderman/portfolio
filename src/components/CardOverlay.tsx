import React, { useState, useContext } from 'react'
import { COLORS } from '../utils/constants'
import styled from 'styled-components';
import CardMenu from './CardMenu';
import OverlayContent from './OverlayContent';
import { MenuContext } from '../MenuContext';
import { OverlayContextProvider } from '../OverlayContext';
import { device } from '../utils/MediaQueries'

const OverlayContainer = styled.div<{ isOpen: boolean | undefined }>`
  position: absolute;
  display: flex;
  overflow: hidden;
  height:${props => props.isOpen ? '74%' : '12%'};
  width: 100%;
  background: ${COLORS.SECONDARY_LIGHT};
  transition: width 0.5s ease-in-out;

  @media ${device.laptop}{
    right: 10%;
    width: ${props => props.isOpen ? '74%' : '12%'};
    height: 75%;
  }
`

const CardOverlay: React.FC = () => {
  // const [overlayToShow, setOverlayToShow] = useState(0);
  const menuContext = useContext(MenuContext);

  return (
    <OverlayContextProvider>
      <OverlayContainer isOpen={menuContext?.isOpen}>
        <CardMenu />
        <OverlayContent />
      </OverlayContainer>
    </OverlayContextProvider>
  )
}

export default CardOverlay
