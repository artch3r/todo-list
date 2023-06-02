import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice.js';
import modalReducer from './modalSlice.js';

export default configureStore({
  reducer: {
    todosInfo: todosReducer,
    modalInfo: modalReducer,
  },
});
