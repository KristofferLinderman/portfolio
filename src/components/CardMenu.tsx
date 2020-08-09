import React from 'react'
import styled from 'styled-components';
import { SPACING, COLORS } from '../utils/constants'
import SocialContainer from './SocialContainer'

const MenuContainer = styled.div`
  height: 100%;
  max-width: 12vw;
  min-width: 12vw;
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

const MenuItem = styled.div`
  color: white;
  margin-top: ${SPACING.MEDIUM};
  margin-left: ${SPACING.SMALL};
`
const menuItems: String[] = ['PROJECTS', 'ABOUT', 'CONTACT'];

type CardMenuProps = {
  showOverlay(index:number):void
}

const CardMenu: React.FC<CardMenuProps> = ({showOverlay}) => {


  const onClick = (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    console.log('Click ', menuItems.indexOf(element.innerText));
    showOverlay(menuItems.indexOf(element.innerText));
  }

  return (
    <MenuContainer>
      <MenuList>
        {
          menuItems.map((menuItem: String, index: number) => {
            return (<MenuItem key={index} onClick={event => onClick(event)}> {menuItem}</MenuItem>)
          })
        }
        {/* <MenuItem onClick={event => onClick(event)}> ABOUT</MenuItem>
        <MenuItem onClick={event => onClick(event)}> CONTACT</MenuItem> */}
      </MenuList>
      <SocialContainer />
    </MenuContainer>
  )
}

export default CardMenu
