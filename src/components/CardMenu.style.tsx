import { SPACING, FONT_SIZE } from '../utils/constants'
import styled from 'styled-components';

export const MenuItem = styled.div`
  color: white;
  cursor: pointer;
  font-size: ${FONT_SIZE.MENU_ITEM};
  margin-top: ${SPACING.MEDIUM};
  margin-left: ${SPACING.SMALL};
`
export const MenuContainer = styled.div`
  height: 100%;
  max-width: 12vw;
  min-width: 12vw;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MenuList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`