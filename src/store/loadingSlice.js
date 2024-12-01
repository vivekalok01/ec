import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "Loading",
    initialState: {
        loadingState: false,

    },
    reducers: {
        loadingHandle:(state, action)=>{
                state.loadingState = action.payload
        }
    }

})

export const loadingAction = loadingSlice.actions
export default  loadingSlice