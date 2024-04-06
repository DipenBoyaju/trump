import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { InputFieldSlice } from "../features/inputField/InputFieldSlice";
import { toggleSlice } from "../features/Toggle/toggleSlice";
import { characterSlice } from "../features/characterCounter/characterSlice";



export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    inputFieldSlice: InputFieldSlice.reducer,
    toggleSlice: toggleSlice.reducer,
    characterSlice: characterSlice.reducer,
  }
})