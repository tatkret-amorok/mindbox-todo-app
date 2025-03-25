import React from 'react';
import { useUnit } from 'effector-react';
import { $todos } from '../store/todos';
import { SCounter } from '../styles/todoCounter';


const TodoCounter: React.FC = () => {
  const todos = useUnit($todos);
  const activeCount = todos.filter(todo => !todo.isCompleted).length;

  return <SCounter>{activeCount} items left</SCounter>;
};

export default TodoCounter;