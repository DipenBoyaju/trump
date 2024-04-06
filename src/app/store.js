import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { InputFieldSlice } from "../features/inputField/InputFieldSlice";



export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    inputFieldSlice: InputFieldSlice.reducer,
  }
})