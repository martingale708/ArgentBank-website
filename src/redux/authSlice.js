import { createSlice } from '@reduxjs/toolkit';

// État initial pour l'authentification
const token = localStorage.getItem('token') || sessionStorage.getItem('token');

const initialState = {
  status: "VOID",
  isConnected: !!token,
   token: token,
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
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
    },
  },
});

// Exportation des actions
export const { loginSuccess, loginFailed, logout } = authSlice.actions;

// Exportation du reducer par défaut
export default authSlice.reducer;