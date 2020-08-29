import React, { useContext } from 'react'
import SocialContainer from './SocialContainer'
import { MenuContext } from '../MenuContext';
import { OverlayContext } from '../OverlayContext';
import { MenuItem, MenuList, MenuContainer, MenuCloseBtn, LogoImg } from './CardMenu.style'
import CloseIcon from '../assets/icons/close-icon.svg';

const menuItems: String[] = ['PROJECTS', 'ABOUT', 'CONTACT'];

const CardMenu: React.FC = () => {

  const menuContext = useContext(MenuContext);
  const overlayContext = useContext(OverlayContext);

  const onClick = (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    console.log('Setting: ', menuItems.indexOf(element.innerText));
    overlayContext?.setActiveOverlay(menuItems.indexOf(element.innerText));
    menuContext?.setIsOpen(true);
  }

  const exitClicked = () => {
    menuContext?.setIsOpen(false);
  }

  const getActive = (index: number) => {
    if (menuContext?.isOpen)
      return index === overlayContext?.activeOverlay;
    return false;
  }

  return (
    <MenuContainer>
      <MenuCloseBtn isActive={false} onClick={() => exitClicked()} toShow={menuContext?.isOpen}><LogoImg src={CloseIcon} alt="Close menu button" /></MenuCloseBtn>
      <MenuList>
        {
          menuItems.map((menuItem: String, index: number) => {
            return (<MenuItem key={index} onClick={event => onClick(event)} isActive={getActive(index)}> {menuItem}</MenuItem>)
          })
        }
      </MenuList>
      <SocialContainer />
    </MenuContainer>)
}


export default CardMenu
