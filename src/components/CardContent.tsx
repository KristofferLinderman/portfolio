import React from 'react'
import styled from 'styled-components';
import { SPACING, COLORS } from '../utils/constants'
import Signature from '../assets/signature.png'

const ContentContainer = styled.div`
  margin: ${SPACING.LARGE} ${SPACING.XLARGE} ${SPACING.LARGE} ${SPACING.MEDIUM};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardTitle = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
`
const CardSubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
  padding-bottom: ${SPACING.LARGE}
`
const SignatureImg = styled.img`
  width: 33%;
`

const CardContent = () => {
  return (
    <ContentContainer>
      <CardTitle>Hello, my name is <br />
        Kristoffer Linderman
      </CardTitle>
      <CardSubTitle>
        I write code and always want to become better. Check out my projects to see some of my work, or just say hi by email or linkedin.
      </CardSubTitle>
      <SignatureImg src={Signature} alt="Signature" />
    </ContentContainer >
  )
}

export default CardContent
