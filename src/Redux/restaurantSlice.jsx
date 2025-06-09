import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk(

    //action
    'restaurant/fetch',

    async(args,thunkAPI)=>{
        const { rejectWithValue } = thunkAPI; 
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true";

      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();
        return data;
 
      } catch (error) {
       return rejectWithValue(error.message);
      }
    
    }
)



const restaurantSlice = createSlice(
    {
        name:"restaurantSlice",
        initialState:{data:{},loading:false,error:null},
        reducers:{},
        extraReducers:(builder)=>{
         builder
         .addCase(fetchData.pending ,(state)=>{
         state.loading=true;
         state.error=null
         })
         .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload
         })
         .addCase(fetchData.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
         })
        }
    }
)

export default restaurantSlice.reducer;
export {fetchData}
