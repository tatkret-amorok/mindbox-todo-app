import React, { useEffect } from 'react';
import { Todo, toggleTodo } from '../store/todos';
import { SItemWrapper, SRadio, STodoText } from '../styles/todoitem';

interface TodoItemProps {
  todo: Todo;
}


const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

  return (
    <SItemWrapper onClick={() => toggleTodo(todo.id)}>
      <SRadio isCompleted={todo.isCompleted} />
      <STodoText isCompleted={todo.isCompleted}>{todo.text}</STodoText>
    </SItemWrapper>
  );
};

export default TodoItem;