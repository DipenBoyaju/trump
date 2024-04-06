import { createSlice } from "@reduxjs/toolkit";



export const toggleSlice = createSlice({
  name: 'toggleSlice',
  initialState: {
    toggle: false
  },

  reducers: {
    showToggle: (state, action) => {
      state.toggle = !state.toggle
    }
  }

})

export const { showToggle } = toggleSlice.actions;