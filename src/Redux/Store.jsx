import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice"
import SingleRestSlicer from "./SingleRestSlicer"

const store = configureStore({
    reducer:{
         restaurants: restaurantReducer,
         SingleRestaurant:SingleRestSlicer
    }
})

export default store;