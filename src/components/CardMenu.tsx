import React from 'react'
import styled from 'styled-components';
import { SPACING, COLORS } from '../utils/constants'
import SocialContainer from './SocialContainer'

const MenuContainer = styled.div`
  height: 100%;
  width: 25%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MenuList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MenuItem = styled.span`
  color: white;
  margin-top: ${SPACING.MEDIUM};
  margin-left: ${SPACING.SMALL};
`

const CardMenu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem> PROJECTS</MenuItem>
        <MenuItem> ABOUT</MenuItem>
        <MenuItem> CONTACT</MenuItem>
      </MenuList>
      <SocialContainer />
    </MenuContainer>
  )
}

export default CardMenu
