import React from 'react';
import { useUnit } from 'effector-react';
import { $visibleTodos } from '../store/todos';
import TodoItem from './TodoItem';
import { SListWrapper } from '../styles/TodoList';


const TodoList: React.FC = () => {
  const todos = useUnit($visibleTodos);

  return (
    <SListWrapper>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </SListWrapper>
  );
};

export default TodoList;