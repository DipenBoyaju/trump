import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    count: 0
  },

  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      if (state.count > 0) {
        state.count = state.count - 1;
      }
    },
    reset: (state, action) => {
      state.count = 0
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions;