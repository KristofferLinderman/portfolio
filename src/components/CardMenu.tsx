import React from 'react'
import styled from 'styled-components';
import { SPACING, FONT_SIZE } from '../utils/constants'
import SocialContainer from './SocialContainer'
import { MenuContextConsumer } from '../MenuContext';

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
  cursor: pointer;
  font-size: ${FONT_SIZE.MENU_ITEM};
  margin-top: ${SPACING.MEDIUM};
  margin-left: ${SPACING.SMALL};
`
const menuItems: String[] = ['PROJECTS', 'ABOUT', 'CONTACT'];

type CardMenuProps = {
  setOverlay(index: number): void,
  closeMenu(): void
}

const CardMenu: React.FC<CardMenuProps> = ({ setOverlay, closeMenu }) => {

  const onClick = (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    setOverlay(menuItems.indexOf(element.innerText));
  }

  return (
    <MenuContextConsumer>
      {menuContext =>
        {console.log(menuContext);
      
        return (menuContext && (<MenuContainer>
          <MenuItem onClick={() => closeMenu()} >X</MenuItem>
          <MenuList>
            {
              menuItems.map((menuItem: String, index: number) => {
                return (<MenuItem key={index} onClick={event => onClick(event)}> {menuItem}</MenuItem>)
              })
            }
          </MenuList>
          <SocialContainer />
        </MenuContainer>))
      }}
    </MenuContextConsumer>
  )
}

export default CardMenu
