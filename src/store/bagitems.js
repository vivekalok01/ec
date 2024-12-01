import { createSlice } from "@reduxjs/toolkit";


const BagitemSlice = createSlice({
    name: "bagItemList",
    initialState: {
     items : [],
     loading: false,
     detailsofProduct: []
    },
    reducers:{
          bagItemCount:(state, action)=>{
             state.items = [...state.items,action.payload]
             
          },
          deleteBagItem:(state, action)=>{
             state.items = state.items.filter((item)=> item.id !== action.payload)
          },
          ProductDetails: (state, action)=>{
          state.detailsofProduct = action.payload
          }
    }
})

export const BagItemAction = BagitemSlice.actions
export default BagitemSlice