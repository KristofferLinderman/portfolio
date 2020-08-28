import React from 'react';
import EmailIcon from '../../assets/icons/email.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import ContactImg from '../../assets/images/contact.jpg';
import { ContactInnerContainer,ContactLinkContainer, ContactLinkImg } from './Contact.style'
import { FlexContainer, HeadShot, TextContainer } from '../Styles';

const Contact = () => {
  return (
    <FlexContainer>
      <ContactInnerContainer>
        <TextContainer>
          The easiest way to contact me, unless you are in the neighborhood, is by email or message on linkedin
        </TextContainer>
        <ContactLinkContainer>
          <ContactLinkImg src={EmailIcon} alt="" />
          <ContactLinkImg src={LinkedinIcon} alt="" />
        </ContactLinkContainer>
      </ContactInnerContainer>
      <HeadShot src={ContactImg} />
    </FlexContainer>
  )
}

export default Contact
