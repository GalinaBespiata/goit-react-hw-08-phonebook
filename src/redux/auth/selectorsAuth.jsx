export const selectLogin = state => state.authData.user.name;
export const selectIsLoggedIn = state => state.authData.isLoggedIn;
export const selectEmail = state => state.authData.user.email;
export const selectPassword = state => state.authData.user.password;
export const selectError = state => state.authData.error;
