import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchRestData = createAsyncThunk(

    //action
    'Singlerestaurant/fetch',

    async(args,thunkAPI)=>{
        const { rejectWithValue } = thunkAPI; 
      const proxyServer = "https://thingproxy.freeboard.io/fetch/";
      const swiggyAPI =
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4640087729816&lng=77.02618695368315&restaurantId=${args}&catalog_qa=undefined&submitAction=ENTER`;

      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();
        return data; 

      } catch (error) {
       return rejectWithValue(error.message);
      }
    
    }
)



const SinglerestaurantSlice = createSlice(
    {
        name:"SinglerestaurantSlice",
        initialState:{data:{},loading:false,error:null},
        reducers:{},
        extraReducers:(builder)=>{
         builder
         .addCase(fetchRestData.pending ,(state)=>{
         state.loading=true;
         state.error=null
         })
         .addCase(fetchRestData.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload
         })
         .addCase(fetchRestData.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
         })
        }
    }
)

export default SinglerestaurantSlice.reducer;
export {fetchRestData}
