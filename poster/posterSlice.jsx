import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState=[
    {
        id:1,
        title:"Chennai flooded",
        content:"Doc 3 to 4 the 2 days are leave for ansoment for the tamilNadu goverment",
        date : sub(new Date(),{ minutes:20 }).toISOString(),
        reactions:{thumbsUp:0,wow:0,heart:0,rocket:0},
        image:""
      
    },
    {
        id:2,
        title:"toa",
        content:"I am very Smart",
        date : sub(new Date(),{ minutes:10 }).toISOString(),
        reactions:{thumbsUp:0,wow:0,heart:0,rocket:0},
        image:""
    }
]



export const posterSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{
        postadded:{
        reducer(state,action)
        {
            state.push(action.payload)
        },
        prepare(title,content,userId,image)
        {
            
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions:{thumbsUp:0,wow:0,heart:0,rocket:0},
                    image,

                }
            }
        }
    },
    reactionAdded(state,action) {
        const{postId,reaction} =action.payload;
        const exsitingPost=state.find(post => post.id === postId);
        if(exsitingPost)
        {
            exsitingPost.reactions[reaction]++
        }

    }

    }

})
export const selectAll = (state)=>state.posts;
export const { postadded ,reactionAdded}=posterSlice.actions;
export default posterSlice.reducer;


