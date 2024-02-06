import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../api/api';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }) => {
    const response = await login(email, password);
    return response;
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password, username }) => {
    const response = await register(email, username, password);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    hasErrors: false,
    isLoading: false,
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.hasErrors = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = false;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.hasErrors = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = false;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export default userSlice.reducer;
