import React, { ReactNode, useState } from 'react'
import { SPACING, COLORS } from '../utils/constants'
import styled, { keyframes } from 'styled-components';
import CardMenu from './CardMenu';
import OverlayContent from './OverlayContent';

const OverlayContainer = styled.div<{isExpanded: boolean}>`
position: absolute;
display: flex;
overflow: hidden;
right: 10%;
width: ${props => props.isExpanded ? '74%' : '12%'};
height: 75%;
background: ${COLORS.SECONDARY_LIGHT};
transition: width 0.5s ease-in-out;
`

const CardOverlay = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const showOverlay = (index: number) => {
    console.log('Overlay for : ', index);
    setIsExpanded(!isExpanded);
  }

  return (
    <OverlayContainer isExpanded={isExpanded}>
      <CardMenu showOverlay={(index) => { showOverlay(index) }} />
      <OverlayContent />
    </OverlayContainer>
  )
}

export default CardOverlay
