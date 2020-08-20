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

  return (
    <CardContainer theme={theme(!!isDarkMode)} >
      <CardContent />
      <CardOverlay />
    </CardContainer>
  )
}

export default Card;