import { createSlice } from '@reduxjs/toolkit';

// État initial pour l'utilisateur
const initialState = {
  status: 'VOID',
  userData: {},
};

// Création du slice pour l'utilisateur
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.status = 'SUCCEEDED';
      state.userData = action.payload;
    },
    editUsername: (state, action) => {
      state.status = 'MODIFIED';
      state.userData.username = action.payload;
    },
    logout: (state) => {
      state.status = 'VOID';
      state.userData = {};
    },
  },
});

// Exportation des actions
export const { getUserProfile, editUsername, logout } = userSlice.actions;

// Exportation du reducer par défaut
export default userSlice.reducer;