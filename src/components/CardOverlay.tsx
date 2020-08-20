import React, { useState, useContext } from 'react'
import { COLORS } from '../utils/constants'
import styled from 'styled-components';
import CardMenu from './CardMenu';
import OverlayContent from './OverlayContent';
import { MenuContext } from '../MenuContext';

const OverlayContainer = styled.div<{ isOpen: boolean | undefined }>`
position: absolute;
display: flex;
overflow: hidden;
right: 10%;
width: ${props => props.isOpen ? '74%' : '12%'};
height: 75%;
background: ${COLORS.SECONDARY_LIGHT};
transition: width 0.5s ease-in-out;
`

const CardOverlay: React.FC = () => {
  const [overlayToShow, setOverlayToShow] = useState(0);
  const menuContext = useContext(MenuContext);

  const setOverlay = (index: number) => {
    console.log('Showing index: ', index);
    setOverlayToShow(index);
    menuContext?.setIsOpen(true);
  }

  return (
    <OverlayContainer isOpen={menuContext?.isOpen}>
      <CardMenu setOverlay={(index) => { setOverlay(index) }} />
      <OverlayContent overlayToShow={overlayToShow} />
    </OverlayContainer>
  )
}

export default CardOverlay
