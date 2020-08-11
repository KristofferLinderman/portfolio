import React from 'react'
import styled from 'styled-components';
import { SPACING } from '../utils/constants'

import GithubLogo from '../assets/github.png'
import LinkedInLogo from '../assets/linkedin.png'

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${SPACING.SMALL} 0;
`

const LogoImg = styled.img`
  filter: brightness(0.1) invert(0.9);
  width: 35%;
  margin: auto;
`

const SocialContainer = () => {
  return (
    <LogoContainer>
      <LogoImg src={GithubLogo} alt=""/>
      <LogoImg src={LinkedInLogo} alt=""/>
    </LogoContainer>
  )
}

export default SocialContainer
