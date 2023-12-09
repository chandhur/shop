import { configureStore } from "@reduxjs/toolkit";
import posterReducer from "./posterSlice"
import userReducer from "./userSlice"
import DarkReducer from "./darkSlice"

export const store =configureStore({
    reducer:{
       posts:posterReducer,
       users:userReducer,
       Dark:DarkReducer,

   }
})

