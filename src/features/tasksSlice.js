import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  fetchTask,
  createTask,
  deleteTask,
  updateTask,
} from '../api/api';

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
  const response = await fetchTasks();
  return response;
});

export const getTask = createAsyncThunk('tasks/getTask', async ({ id }) => {
  const response = await fetchTask(id);
  return response;
});

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, text, dueDate, postDate }) => {
    const response = await createTask(title, text, dueDate, postDate);
    return response;
  }
);

export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async ({ id }) => {
    const response = await deleteTask(id);
    return response;
  }
);

export const changeTask = createAsyncThunk(
  'tasks/changeTask',
  async ({ id, title, text, dueDate, postDate }) => {
    const response = await updateTask(id, title, text, dueDate, postDate);
    return response;
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    individualTask: {},
    tasks: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.tasks = action.payload;
    },
    [getTasks.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getTask.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getTask.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.individualTask = action.payload;
    },
    [getTask.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [addTask.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addTask.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.tasks.push(action.payload);
    },
    [addTask.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [removeTask.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [removeTask.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    [removeTask.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [changeTask.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [changeTask.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    [changeTask.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default tasksSlice.reducer;
