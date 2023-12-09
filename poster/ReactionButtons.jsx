import { useDispatch } from "react-redux";
import{ reactionAdded } from "./posterSlice"


export default  function ReactionButtons({post})
{

    const reactImage ={
    
        thumbsUp:"😍",
        wow:"🤗",
        heart:"❤️",
        rocket:"🤭"
    }
    
    const dispatch =useDispatch();
    
    const emoji =Object.entries(reactImage).map(([name,emoji])=>{
        return(<button
        className="m-2 hover:animate-bounce"
        key={name}
        type="button"
        onClick={()=> dispatch(reactionAdded({postId:post.id,reaction:name})) }>
            {emoji}{post.reactions[name]}
        </button>)
    })
    
    return(<div className="m-2">{emoji}</div>)
}