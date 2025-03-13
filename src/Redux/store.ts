
import { configureStore } from "@reduxjs/toolkit";
import { FirstValue } from "./reducer";

export const store=configureStore({
    reducer:{
        FirstStateValue:FirstValue
    }
})