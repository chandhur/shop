import Post from "./poster/Post"
import Addpost from "./poster/AddPost";
import { Link } from "react-router-dom";
// import { darkAll } from "./poster/darkSlice"; 
// import { useSelector,useDispatch } from "react-redux";
// import { darkAdded } from "./poster/darkSlice";
// import { useEffect } from "react";



export default function Show()
{
    // const dispatch=useDispatch();
    // const seleceter =useSelector(darkAll)

   
  

    // const handleSubmit = ()=>{
        
    //     dispatch(darkAdded(true))
      //  <Containers/>
    // }
    return(
        <div>
            <div className=" bg-red-500" >
        <nav className=" container mx-auto flex ">
          <img src="https://logodix.com/logo/570888.png" className="h-20 w-20" alt="news"/>
          <h1 className="ml-auto bg-red-200 p-5 m-4 font-bold rounded hover:bg-green-300"><Link to="/login">Login</Link></h1>
         
           
        </nav>
        </div>
        < div className="flex container mx-auto" >
           <Addpost/>
           <Post/>
        </div>
        </div>

    )
}