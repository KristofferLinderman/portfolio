import React, { useContext } from 'react'
import Signature from '../assets/signature.png'
import { MenuContext } from '../MenuContext';
import { ContentContainer, CardTitle, CardSubTitle, SignatureImg } from './CardContent.style'


const CardContent: React.FC = () => {
  const menuContext = useContext(MenuContext);

  return (
    <ContentContainer onClick={() => menuContext?.setIsOpen(false)} isOverlayOpen={menuContext?.isOpen}>
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
