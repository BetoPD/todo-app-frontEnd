import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, register, verifyToken } from '../api/api';

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

export const userLogout = createAsyncThunk('user/logout', async () => {
  const response = await logout();
  console.log(response);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    authorized: false,
    hasErrors: false,
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    setAuthorized: (state) => {
      state.authorized = true;
    },
    setNotAuthorized: (state) => {
      state.authorized = false;
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
      state.authorized = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasErrors = true;
      state.errorMessage = action.error.message;
      state.authorized = false;
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
      state.authorized = false;
    },
    [vToken.fulfilled]: (state, action) => {
      state.authorized = true;
      state.isLoading = false;
      state.hasErrors = false;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    [vToken.rejected]: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
      state.authorized = false;
    },
    [userLogout.pending]: (state) => {
      state.isLoading = true;
      state.hasErrors = false;
    },
    [userLogout.fulfilled]: (state) => {
      state.isLoading = false;
      state.hasErrors = false;
      state.authorized = false;
      state.username = '';
      state.email = '';
    },
    [userLogout.rejected]: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const { setAuthorized, clearErrorMessage, setNotAuthorized } =
  userSlice.actions;

export default userSlice.reducer;
