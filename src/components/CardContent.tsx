import React from 'react'
import styled from 'styled-components';
import { SPACING, FONT_SIZE } from '../utils/constants'
import Signature from '../assets/signature.png'
import { MenuContextConsumer } from '../MenuContext';

const ContentContainer = styled.div`
  padding: ${SPACING.LARGE} ${SPACING.MEDIUM};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardTitle = styled.h1`
  font-size: ${FONT_SIZE.LARGE};
  line-height: ${FONT_SIZE.LARGE};
  text-transform: uppercase;
`
const CardSubTitle = styled.h2`
  font-size: ${FONT_SIZE.MEDIUM};
  line-height: ${FONT_SIZE.LARGE};
  max-width: 70%;
  text-transform: uppercase;
  padding-bottom: ${SPACING.LARGE};
`
const SignatureImg = styled.img`
  width: 33%;
`

type CardContentProps = {
  onClick(event: React.MouseEvent): void
}

const CardContent: React.FC<CardContentProps> = ({ onClick }) => {
  return (
    <MenuContextConsumer>
      {menuContext =>
        //Check for null as context has type <MenuContextType | null>
        menuContext && (
          <ContentContainer onClick={(event) => onClick(event)} >
            <CardTitle>Hello, my name is <br />
              Kristoffer Linderman
            </CardTitle>
            <CardSubTitle>
              I write code and always want to become better. Check out my projects to see some of my work, or just say hi by email or linkedin.
            </CardSubTitle>
            <SignatureImg src={Signature} alt="Signature" />
          </ContentContainer >)
      }
    </MenuContextConsumer>
  )
}

export default CardContent
