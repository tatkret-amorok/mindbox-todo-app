import React, { useState, KeyboardEvent } from 'react';
import { addTodo } from '../store/todos';
import { SInputWrapper, SStyledInput } from '../styles/todoInput';


const TodoInput: React.FC = () => {
  const [text, setText] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <SInputWrapper>
      <SStyledInput
        type="text"
        placeholder="What do you want to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </SInputWrapper>
  );
};

export default TodoInput;
