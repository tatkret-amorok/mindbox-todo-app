import React from 'react';
import { clearCompleted, $todos } from '../store/todos';
import { useUnit } from 'effector-react';
import { SButton } from '../styles/clearCompletedButton';


const ClearCompletedButton: React.FC = () => {
  const todos = useUnit($todos);
  const hasCompleted = todos.some(todo => todo.isCompleted);

  return (
        <SButton disabled={!hasCompleted} onClick={() => clearCompleted() }>Clear completed</SButton>
  );
};

export default ClearCompletedButton;