import { createEvent, createStore, combine } from 'effector';

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
  }

export type Filter = 'all' | 'active' | 'completed';
// events
  const addTodo = createEvent<string>();
  const toggleTodo = createEvent<number>();
  const clearCompleted = createEvent();
  const setFilter = createEvent<Filter>();

// stores
const $todos = createStore<Todo[]>([])
  .on(addTodo, (state, text) => {
    const newTodo: Todo = { id: Date.now(), text, isCompleted: false };
    return [...state, newTodo];
  })
  .on(toggleTodo, (state, id) =>{
    const newState = state.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    return newState;
}
  )
  .on(clearCompleted, (state) => state.filter(todo => !todo.isCompleted));

const $filter = createStore<Filter>('all')
  .on(setFilter, (_, filter) => filter);

const $visibleTodos = combine($todos, $filter, (todos, filter) => {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.isCompleted);
        case 'completed':
            return todos.filter(todo => todo.isCompleted);
        default:
            return todos;
    }
})

export {
    addTodo,
    toggleTodo,
    clearCompleted,
    setFilter,
    $todos,
    $filter,
    $visibleTodos
}