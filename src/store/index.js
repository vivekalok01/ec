import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import BagitemSlice from "./bagitems";
import wishListSlice from "./WishList";
import loadingSlice from "./loadingSlice";


const ShopuStore = configureStore({
    reducer:{
        category: categorySlice.reducer,
        bagItemList: BagitemSlice.reducer,
        wishList: wishListSlice.reducer,
        Loading: loadingSlice.reducer
    }
})

export default ShopuStore