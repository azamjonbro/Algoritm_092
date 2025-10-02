// src/features/basket/basketSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // savatchadagi mahsulotlar ro‘yxati
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // yangi mahsulot qo‘shish
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      // mahsulotni ID bo‘yicha olib tashlash
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    clearBasket: (state) => {
      // butun savatchani bo‘shatish
      state.items = [];
    },
   
  },
});
export const selectAllProducts = (state) => state.basket.items;
export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
