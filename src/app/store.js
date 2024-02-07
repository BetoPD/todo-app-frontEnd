import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import taskReducer from '../features/tasksSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
