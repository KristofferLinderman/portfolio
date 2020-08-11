import React, { useState } from 'react'
import { COLORS } from '../utils/constants'
import styled from 'styled-components';
import CardMenu from './CardMenu';
import OverlayContent from './OverlayContent';

const OverlayContainer = styled.div<{ hideOverlay: boolean }>`
position: absolute;
display: flex;
overflow: hidden;
right: 10%;
width: ${props => props.hideOverlay ? '12%' : '74%'};
height: 75%;
background: ${COLORS.SECONDARY_LIGHT};
transition: width 0.5s ease-in-out;
`

type CardOverlayProps = {
  hideOverlay: boolean,
  showOverlay(): void,
  closeMenu(): void
}

const CardOverlay: React.FC<CardOverlayProps> = ({ hideOverlay, showOverlay, closeMenu }) => {
  const [overlayToShow, setOverlayToShow] = useState(0);

  const setOverlay = (index: number) => {
    console.log('Showing index: ', index);
    setOverlayToShow(index);
    showOverlay();
  }

  return (
    <OverlayContainer hideOverlay={hideOverlay}>
      <CardMenu setOverlay={(index) => { setOverlay(index) }} closeMenu={() => closeMenu()} />
      <OverlayContent overlayToShow={overlayToShow} />
    </OverlayContainer>
  )
}

export default CardOverlay
