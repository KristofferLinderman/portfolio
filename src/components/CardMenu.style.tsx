import { SPACING, FONT_SIZE } from '../utils/constants'
import styled from 'styled-components';

export const MenuItem = styled.p<{ isActive: boolean }>`
  color: white;
  cursor: pointer;
  font-size: ${FONT_SIZE.MENU_ITEM};
  margin-left: ${SPACING.SMALL};
  user-select: none;
  width: fit-content;
  position: relative;
  &::after{
    position: absolute;
    content: '';
    height: 3px;
    bottom: -3px;
    right: 0; 
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    background-color: white;
    transition: width 0.3s ease-in-out;
  }
`

export const MenuCloseBtn = styled(MenuItem) <{ toShow: boolean | undefined }>`
  position: absolute;
  opacity: ${props => props.toShow ? '1' : '0'};
  margin-top: ${SPACING.XSMALL};
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0.5s;
`

export const MenuContainer = styled.div`
  height: 100%;
  max-width: 12vw;
  min-width: 12vw;
  background-color: #333;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MenuList = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto 0;
`

export const LogoImg = styled.img`
  filter: brightness(0.1) invert(0.9);
  margin: auto;
`