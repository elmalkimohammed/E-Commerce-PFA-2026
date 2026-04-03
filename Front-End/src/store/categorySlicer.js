
import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice(
    {
        name: "chosenCategory",
        initialState: { value: null },
        reducers: {
            setChosenCategory: ( state, action ) => {
                state.value = action.payload
            },
            clearChosenCategory: ( state ) => {
                state.value = null
            }
        }
    }
)

export const { setChosenCategory , clearChosenCategory } = categorySlice.actions
export default categorySlice.reducer
