import React from 'react';
import TodoCard from './components/TodoCard';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { STitle } from './styles/todoCard';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <STitle>Todos</STitle>
        <TodoCard />
      </>
    </ThemeProvider>
  );
};

export default App;
