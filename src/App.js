import React from 'react';

import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import Home from './Home';

import theme from './theme';

console.log({ theme });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />

        <Home />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
