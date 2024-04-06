import { createSlice } from "@reduxjs/toolkit";


export const InputFieldSlice = createSlice({
  name: 'inputFieldSlice',
  initialState: {
    text: ''
  },

  reducers: {
    showText: (state, action) => {
      state.text = action.payload
    }
  }
}
)

export const { showText } = InputFieldSlice.actions