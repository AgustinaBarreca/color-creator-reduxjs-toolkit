import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  colors: [],
};
const colorSlice = createSlice({
  name: 'colorReducer',
  initialState,
  reducers: {
    // addColor(state, { payload }) {
    //   state.colors.push(payload);
    // },
    removeColor(state, { payload }) {
      state.colors = state.colors.filter((color) => color.id !== payload);
    },
    loadColors(state, { payload }) {
      state.colors.push(...payload);
    },
    addColor(state, { payload }) {
      const newColor = {
        id: v4(),
        ...payload,
      };
      state.colors.push(newColor);
    },
  },
});

export const colorReducer = colorSlice.reducer;

export const colorActions = colorSlice.actions;
