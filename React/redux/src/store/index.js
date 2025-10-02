// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import BasketSlice from "../features/basket/basketSlice"
// import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer,
    basket:BasketSlice
  },
});
