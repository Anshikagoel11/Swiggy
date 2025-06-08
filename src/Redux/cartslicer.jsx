import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
    name:"cartSlice",
    initialState:{cartItems:[],totalItemsInCart:0},
    reducers:{
     addItem:(state,action)=>{
       state.cartItems.push({...action.payload,"quantity":1})
       state.totalItemsInCart+=1;
     },
     increaseItem:(state,action)=>{
       const thatItem = state.cartItems.find(item => action.payload.id === item.id)
       thatItem.quantity += 1;
       state.totalItemsInCart+=1
     },
     decreaseItem:(state,action)=>{
    const thatItem = state.cartItems.find(item => action.payload.id === item.id)
if(thatItem){
       if(thatItem.quantity >1){
        thatItem.quantity -= 1;
       }
       else {
        state.cartItems = state.cartItems.filter(item=>item.id !== action.payload.id)
       }
    }
       
       state.totalItemsInCart-=1;
     }
    }
})

export default cartSlicer.reducer
export const {addItem,increaseItem,decreaseItem} = cartSlicer.actions;
