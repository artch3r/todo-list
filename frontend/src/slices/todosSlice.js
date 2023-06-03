/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({ displayedTodos: 'all' });

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    deleteTodo: todosAdapter.removeOne,
    completeTodo: todosAdapter.updateOne,
    renameTodo: todosAdapter.updateOne,
    setDisplayedTodos: (state, { payload }) => {
      state.displayedTodos = payload;
    },
  },
});

const selectTodosInfo = (state) => state.todosInfo;

const todosSelectors = todosAdapter.getSelectors(selectTodosInfo);

const selectTodos = todosSelectors.selectAll;

export const selectDisplayedTodos = createSelector(
  selectTodosInfo,
  (todosInfo) => todosInfo.displayedTodos,
);

export const selectCurrentTodos = createSelector(
  selectTodos,
  selectDisplayedTodos,
  (todos, displayedTodos) => {
    const todosMap = {
      all: todos,
      active: todos.filter((todo) => todo.status === 'active'),
      completed: todos.filter((todo) => todo.status === 'completed'),
    };

    return todosMap[displayedTodos];
  },
);

export const {
  addTodo, deleteTodo, renameTodo, completeTodo, setDisplayedTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
