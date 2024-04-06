import { createSlice } from "@reduxjs/toolkit";


export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState: {
    text: ''
  },

  reducers: {
    showText: (state, action) => {
      state.text = action.payload;
    }
  }
})

export const { showText } = characterSlice.actions;