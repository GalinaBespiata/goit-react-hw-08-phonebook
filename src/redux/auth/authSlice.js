import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refreshCurrentUser, register } from './operationsAuth';
//reduxqwe, reduxqwe@gmail.com, reduxqwe
const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: authInitialState,

  reducers: {},
  extraReducers: builder =>
    builder

      .addCase(register.pending, pendingHandler)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, rejectHandler)

      .addCase(login.pending, pendingHandler)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.name = action.payload.user.name;
        state.token = action.payload.token;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, rejectHandler)

      .addCase(logOut.pending, pendingHandler)
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = null;
        state.user.name = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, rejectHandler)

      .addCase(refreshCurrentUser.pending, pendingHandler)
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.name = action.payload.name;

        state.user.email = action.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isLoading = false;
        state.token = null;
      }),
});

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const authReducer = authSlice.reducer;
