import { SPACING, FONT_SIZE } from '../utils/constants'
import styled from 'styled-components';

export const MenuItem = styled.p`
  color: white;
  cursor: pointer;
  font-size: ${FONT_SIZE.MENU_ITEM};
  margin-left: ${SPACING.SMALL};
  user-select: none;
`

export const MenuCloseBtn = styled(MenuItem)`
    position: absolute;
    margin-top: ${SPACING.XSMALL};
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