import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice"
import SingleRestSlicer from "./SingleRestSlicer"
import cartReducer from "./cartslicer"

const store = configureStore({
    reducer:{
         restaurants: restaurantReducer,
         SingleRestaurant:SingleRestSlicer,
         cartSlicer:cartReducer
    }
})

export default store;