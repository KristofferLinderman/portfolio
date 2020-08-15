import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/constants'
import CardContent from './CardContent';
import CardOverlay from './CardOverlay';

const CardContainer = styled.div`
  width: 80%;
  max-width: 100rem;
  height: 75%;
  margin: auto;
  display: flex;
  overflow: hidden;
  background-color: ${props => props.theme.secondary};
  box-shadow: 7px 11px 15px rgba(0, 0, 0, 0.25);
  `;

const theme = (isDarkMode: boolean) => {
  return (
    {
      main: COLORS.BACKGROUND_LIGHT,
      secondary: isDarkMode ? COLORS.SECONDARY_DARK : COLORS.SECONDARY_LIGHT
    }
  )
}

type CardProps = {
  isDarkMode?: boolean
}

const Card: React.FC<CardProps> = ({ isDarkMode }) => {


  //TODO Move menu open/close to useContext https://www.youtube.com/watch?v=5LrDIWkK_Bc
  const [hideOverlay, setHideOverlay] = useState(false);

  const cardClicked = () => {
    console.log('Clicked on the card');
    if (!hideOverlay)
      setHideOverlay(!hideOverlay)
  }

  const showOverlay = () => {
    setHideOverlay(false);
  }

  const closeOverlay = () => {
    setHideOverlay(true);
  }

  return (
    <CardContainer theme={theme(!!isDarkMode)} >
      <CardContent onClick={() => cardClicked()} />
      <CardOverlay hideOverlay={hideOverlay} showOverlay={() => showOverlay()} closeMenu={ () => closeOverlay()}/>
    </CardContainer>
  )
}

export default Card;