import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Footer from './Footer';

import { SCard } from '../styles/todoCard';

const TodoCard: React.FC = () => {
    return (
      <SCard>
        <TodoInput />
        <TodoList />
        <Footer />
      </SCard>
    );
  };
  
  export default TodoCard;