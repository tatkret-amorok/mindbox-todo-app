import React from 'react';
import { setFilter, $filter } from '../store/todos';
import type { Filter } from '../store/todos';
import { useUnit } from 'effector-react';
import { STabButton, STabsWrapper } from '../styles/filterTabs';



const FilterTabs: React.FC = () => {
  const currentFilter = useUnit($filter);

  const filters: Filter[] = ['all', 'active', 'completed'];

  return (
    <STabsWrapper>
      {filters.map((filter) => (
        <STabButton
          key={filter}
          active={currentFilter === filter}
          onClick={() => setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </STabButton>
      ))}
    </STabsWrapper>
  );
};

export default FilterTabs;