import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../../components/TodoItem';
import { toggleTodo } from '../../store/todos';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TodoItem', () => {
  // Вызывает toggleTodo на клик
  it('calls toggleTodo on click', () => {
    const toggleTodoMock = jest.fn();
    toggleTodo.watch(toggleTodoMock);

    const todo = { id: 1, text: 'Test Item', isCompleted: false };
    render(<ThemeProvider theme={theme}><TodoItem todo={todo} /></ThemeProvider>);
    const item = screen.getByText(/Test Item/i);

    fireEvent.click(item);

    expect(toggleTodoMock).toHaveBeenCalledWith(1);
  });
});