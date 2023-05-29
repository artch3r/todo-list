import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
  },
});

export default todosSlice.reducer;

export const { addTodo } = todosSlice.actions;
