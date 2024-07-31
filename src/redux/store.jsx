import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from "./authreducer.jsx";
import { userReducer } from "./userreducer.jsx";

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store