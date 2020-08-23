import React, { useContext } from 'react'
import SocialContainer from './SocialContainer'
import { MenuContext } from '../MenuContext';
import { MenuItem, MenuList, MenuContainer, MenuCloseBtn, LogoImg } from './CardMenu.style'
import CloseIcon from '../assets/close-icon.svg';

const menuItems: String[] = ['PROJECTS', 'ABOUT', 'CONTACT'];

type CardMenuProps = {
  setOverlay(index: number): void,
}

const CardMenu: React.FC<CardMenuProps> = ({ setOverlay }) => {

  const menuContext = useContext(MenuContext);

  const onClick = (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    setOverlay(menuItems.indexOf(element.innerText));
  }

  const exitClicked = () => {
    console.log('Exit clicked');

    console.log(menuContext);
    menuContext?.setIsOpen(false);
  }

  return (
    <MenuContainer>
      {(menuContext?.isOpen && <MenuCloseBtn onClick={() => exitClicked()} ><LogoImg src={CloseIcon} alt="Close menu button"/></MenuCloseBtn>)}
      <MenuList>
        {
          menuItems.map((menuItem: String, index: number) => {
            return (<MenuItem key={index} onClick={event => onClick(event)}> {menuItem}</MenuItem>)
          })
        }
      </MenuList>
      <SocialContainer />
    </MenuContainer>)
}


export default CardMenu
