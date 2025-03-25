import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'effector-react';
import { fork } from 'effector';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import ClearCompletedButton from '../../components/ClearCompletedButton';
import { clearCompleted, $todos } from '../../store/todos';

describe('ClearCompletedButton', () => {
    // задизейблен когда нет завершенных todo
    it('is disabled when no todos are completed', () => {
      const scope = fork({
        values: [
          [$todos, []]
        ],
      });
  
      render(
        <Provider value={scope}>
          <ThemeProvider theme={theme}>
            <ClearCompletedButton />
          </ThemeProvider>
        </Provider>
      );
  
      const button = screen.getByRole('button', { name: /Clear completed/i });
      expect(button).toBeDisabled();
    });
    // запускает clearCompleted когда происходит клик, если есть завершенные todo
    it('triggers clearCompleted when clicked if there are completed todos', () => {
      const clearCompletedMock = jest.fn();
      const unsubscribe = clearCompleted.watch(clearCompletedMock);
  
      const scope = fork({
        values: [
          [$todos, [{ id: 1, text: 'Completed Todo', isCompleted: true }]]
        ],
      });
  
      render(
        <Provider value={scope}>
          <ThemeProvider theme={theme}>
            <ClearCompletedButton />
          </ThemeProvider>
        </Provider>
      );
  
      const button = screen.getByRole('button', { name: /Clear completed/i });
      expect(button).not.toBeDisabled();
  
      fireEvent.click(button);
      expect(clearCompletedMock).toHaveBeenCalled();
  
      unsubscribe();
    });
  });