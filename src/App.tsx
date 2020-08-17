import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from './utils/constants';
import Card from './components/Card';
import { MenuContextType, MenuContextProvider } from './MenuContext';

// Define our button, but with the use of props.theme this time
const AppContainer = styled.div`
  background-color: ${props => props.theme.main};
  width: 100vw;
  height: 100vh;
  display: flex;
`;

// TODO Use theme correctly https://styled-components.com/docs/advanced
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
AppContainer.defaultProps = {
  theme: {
    main: COLORS.BACKGROUND_LIGHT
  }
}
// Define what props.theme will look like
const theme = {
  main: COLORS.BACKGROUND_LIGHT
}

const App = () => {
  const [darkModeEnabled,] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  // const defaultContextValue: MenuContextType = {
  //   isOpen,
  //   setIsOpen
  // }
  return (
    <MenuContextProvider value={{isOpen, setIsOpen}}>
      <AppContainer theme={theme}>
        <Card isDarkMode={darkModeEnabled} />
      </AppContainer>
    </MenuContextProvider>

  )
}

export default App;
