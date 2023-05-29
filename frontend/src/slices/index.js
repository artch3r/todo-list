import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice.js';

export default configureStore({
  reducer: {
    todosInfo: todosReducer,
  },
});
