import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
  name:"wishList",
  initialState: {
    wishlists: []
  },
  reducers:{
    wishListItem:(state, action)=>{
         state.wishlists = [...state.wishlists, action.payload]
    },
    removeItem: (state, action)=>{
      state.wishlists = state.wishlists.filter((item)=> item.id !== action.payload)
    }

  }
})
export default wishListSlice
export const wishListAction =wishListSlice.actions