import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


const initialState =[

    {id:'0',name:"chandhuru"},
    {id:'1',name:"santosh"},
    {id:'2',name:"priya"},
   
]

const usersSlice = createSlice({

        name:"users",
        initialState,
        reducers:{
            AutherAdd:{
                reducer(state,action)
                {
                      state.push(action.payload)
                },
                prepare(name)
                {
                       return{
                        payload:{
                            id:nanoid(),
                            name,
                           
                           
                        }
                       }
                }

            }
        }
})

export  const selectAllUser = (state)=> state.users;
export  const { AutherAdd } =usersSlice.actions;
export default usersSlice.reducer;