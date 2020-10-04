import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/constants'
import CardContent from './CardContent';
import CardOverlay from './CardOverlay';
import { device } from '../utils/MediaQueries'


//The menu is still way off, might need some more radical re-thinking to get it up and running again? Maybe need some restructre of the components to better accomedate moble/responsive views.
const CardContainer = styled.div`
  margin: auto;
  display: flex;
  overflow: hidden;
  width: 90%; 
  height: 90%;
  flex-direction: row;
  background-color: ${props => props.theme.secondary};
  box-shadow: 7px 11px 15px rgba(0, 0, 0, 0.25);

  @media ${device.tablet}{
    width: 80%;
    height: 75%;
    flex-direction: column;
  }
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

  return (
    <CardContainer theme={theme(!!isDarkMode)} >
      <CardContent />
      <CardOverlay />
    </CardContainer>
  )
}

export default Card;