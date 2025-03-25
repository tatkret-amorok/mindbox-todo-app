import React from 'react';
import TodoCounter from './TodoCounter';
import FilterTabs from './FilterTabs';
import ClearCompletedButton from './ClearCompletedButton';
import { SFooterWrapper } from '../styles/footer';


const Footer: React.FC = () => {
  return (
    <SFooterWrapper>
      <TodoCounter />
      <FilterTabs />
      <ClearCompletedButton />
    </SFooterWrapper>
  );
};

export default Footer;