import React from 'react'
import styled from 'styled-components';

const ContentContainer = styled.div`
  background-color: #333;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 6rem;
`

const OverlayContent = () => {
  return (
    <ContentContainer>
      <h1>CLAMP LIFE</h1>
    </ContentContainer>
  )
}

export default OverlayContent
