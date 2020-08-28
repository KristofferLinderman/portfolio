import React from 'react'
import {aboutMeText} from '../../contentData/AboutContent';
import AboutImg from '../../assets/images/aboutMe.jpg'
import {FlexContainer, HeadShot, TextContainer } from '../Styles';
import {AboutText} from './About.style'

const About = () => {
  return (
    <FlexContainer>
      <AboutText>
        {aboutMeText}
      </AboutText>
      <HeadShot src={AboutImg} />
    </FlexContainer>
  )
}

export default About
