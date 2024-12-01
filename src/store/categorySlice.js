import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState: {
        staticData:[],
        updatedData: [],
        
    },
    reducers:{
        staticDataHandle: (state, action)=>{
            
         state.staticData =action.payload
         state.updatedData = action.payload
        
        },
        allProducts:(state, action)=>{
         state.updatedData = state.staticData
        },
        categoryOfProducts:(state, action)=>{
        
            const updatedItems = state.staticData.filter((item) => item.category == action.payload)
            state.updatedData = updatedItems
        },
        searchProducts: (state, action)=>{
            const inputval = action.payload
             let upval=  state.staticData.filter((item)=> item.title.toUpperCase().includes(inputval.toUpperCase()))
                 state.updatedData = upval
             
        }
    }
})
export const categoryAction = categorySlice.actions
export default categorySlice