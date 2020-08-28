import React from 'react'
import styled from 'styled-components';
import { SPACING } from '../utils/constants'

import GithubLogo from '../assets/icons/github.svg'
import LinkedInLogo from '../assets/icons/linkedin.svg'

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${SPACING.SMALL} 0;
`

const LogoImg = styled.img`
  filter: brightness(0.1) invert(0.9);
  width: 25%;
  user-select: none;
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
