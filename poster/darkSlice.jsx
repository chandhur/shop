import { createSlice } from "@reduxjs/toolkit"

const initialState= false

    const DarkSlice = createSlice({
    name:"Dark",
    initialState,
    reducers:{
        darkAdded:{
            reducer(state,action)
            {
                state = action.payload
                
            }
          }
    }

})

export const darkAll = (state)=>state.Dark
export const { darkAdded }=DarkSlice.actions;
export default DarkSlice.reducer;
