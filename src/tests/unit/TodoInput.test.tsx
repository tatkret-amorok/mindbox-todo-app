import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import TodoInput from '../../components/TodoInput';
import { addTodo } from '../../store/todos';

describe('TodoInput', () => {
//вызывает addTodo при нажатии Enter и очищает input
it('calls addTodo on Enter key press and clears input', () => {
    const addTodoMock = jest.fn();
    const unsubscribe = addTodo.watch((payload) => {
        addTodoMock(payload);
      });

      render(
        <ThemeProvider theme={theme}>
          <TodoInput />
        </ThemeProvider>
      );
    const input = screen.getByPlaceholderText("What do you want to do?");

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(addTodoMock).toHaveBeenCalledWith('Test Todo');
    expect(input).toHaveValue('');

    unsubscribe();
  });
});