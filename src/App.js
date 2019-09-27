import React from 'react';

import { ThemeProvider } from 'emotion-theming'

import theme from './theme';

import Home from './Home';

function App() {
  const [currentTheme, setTheme] = React.useState('dark');
  const toggleTheme = () => setTheme(
    currentTheme === 'dark'
      ? 'light'
      : 'dark'
  );

  const themer = (themeName) => {
    switch (themeName) {
      case 'dark':
        return {
          ...theme,
          colors: {
            ...theme.colors,
            text: '#fff',
            background: '#000',
          }
        };
      default:
        return theme;
    }
  }

  return (
    <ThemeProvider theme={themer(currentTheme)}>
      <Home
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
