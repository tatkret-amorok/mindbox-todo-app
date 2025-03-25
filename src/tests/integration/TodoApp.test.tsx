import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoCard from '../../components/TodoCard';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TodoApp Integration', () => {
 
  // добавляет todo, переключает его, фильтрует и очищает выполненные todos
  it('adds a todo, toggles it, filters, and clears completed todos', () => {
    render( <ThemeProvider theme={theme}><TodoCard /></ThemeProvider>);

    const input = screen.getByPlaceholderText("What do you want to do?");
    fireEvent.change(input, { target: { value: 'Integration Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // Todo должен появиться в списке
    expect(screen.getByText('Integration Todo')).toBeInTheDocument();

    // переключение todo должно сделать его завершенным
    fireEvent.click(screen.getByText('Integration Todo'));
    // проверка стилей на перечеркнутый текст
    expect(screen.getByText('Integration Todo')).toHaveStyle('text-decoration: line-through');

    // кликнув по "Active" табу завершенные todos не должны показываться
    const activeTab = screen.getByRole('button', { name: /Active/i });
    fireEvent.click(activeTab);
    expect(screen.queryByText('Integration Todo')).toBeNull();

    // переключение на  "All" делает todo снова видимым
    const allTab = screen.getByRole('button', { name: /All/i });
    fireEvent.click(allTab);
    expect(screen.getByText('Integration Todo')).toBeInTheDocument();

    // Клик на "Clear completed" кнопку удаляет todo
    const clearButton = screen.getByRole('button', { name: /Clear completed/i });
    fireEvent.click(clearButton);
    expect(screen.queryByText('Integration Todo')).toBeNull();
  });
});