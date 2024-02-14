import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, verifyToken } from '../api/api';

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

export const vToken = createAsyncThunk('user/vToken', async () => {
  const response = await verifyToken();
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    authorazied: false,
    hasErrors: false,
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    setAuthorized: (state) => {
      state.authorazied = true;
    },
    setNotAuthorized: (state) => {
      state.authorazied = false;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = '';
    },
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
      state.errorMessage = '';
      state.authorazied = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = true;
      state.errorMessage = action.error.message;
      state.authorazied = false;
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
      state.errorMessage = '';
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = true;
      state.errorMessage = action.error.message;
    },
    [vToken.pending]: (state) => {
      state.isLoading = true;
      state.hasErrors = false;
    },
    [vToken.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = false;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.errorMessage = '';
      state.authorazied = true;
    },
    [vToken.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = true;
      state.errorMessage = action.error.message;
      state.authorazied = false;
    },
  },
});

export const { setAuthorized, clearErrorMessage, setNotAuthorized } =
  userSlice.actions;

export default userSlice.reducer;
