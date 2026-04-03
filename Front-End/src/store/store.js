
import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlicer.js"

const store = configureStore(
    {
        reducer: {
            chosenCategory: categorySlice
        }
    }
)

export default store
