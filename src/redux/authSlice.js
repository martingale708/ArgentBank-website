import { createSlice } from '@reduxjs/toolkit';

// État initial pour l'authentification
const initialState = {
  status: "VOID",
  isConnected: false,
  token: null,
  error: null,
};

// Création du slice pour l'authentification
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.status = "SUCCEEDED";
      state.isConnected = true;
      state.token = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.status = "FAILED";
      state.isConnected = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.status = "VOID";
      state.isConnected = false;
      state.token = null;
      state.error = null;
    },
  },
});

// Exportation des actions
export const { loginSuccess, loginFailed, logout } = authSlice.actions;

// Exportation du reducer par défaut
export default authSlice.reducer;