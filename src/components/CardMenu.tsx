import React from 'react'
import SocialContainer from './SocialContainer'
import { MenuContextConsumer } from '../MenuContext';
import { MenuItem, MenuList, MenuContainer } from './CardMenu.style'

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
      {menuContext => {
        console.log(menuContext);

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
