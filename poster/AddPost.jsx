import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { postadded } from "./posterSlice"
import {selectAllUser} from "./userSlice"



export default function Addpost()
{
    const dispatch = useDispatch();
    const [title,setUsername]=useState('')
    const[content,setContent]=useState('')
    const[userId,setUserId]=useState('')
     const[image,setImage]=useState()
   

    const users=useSelector(selectAllUser);

    const button =Boolean(title) &&  Boolean(userId) && Boolean(image)

    const handleSubmit = ()=>{
    dispatch(postadded(title,content,userId,image))
    setUsername('') 
    setContent('') 
    setImage('')

    
   
}
 

    const usersOptions = users.map((value)=>(<option key={value.id} >{value.name}</option>))
            
       return(
          <>
       <div className="max-w-sm mx-auto my-4 ">
      
       <div className="  p-12 shadow-2xl  ">
         <center>
        <label forname ="name" className="block mb-4 text-2xl font-medium text-gray-900 dark:text-white  ">postes</label>
        </center>

        <label forname="title" className="block mb-4 text-xl font-medium text-gray-900 dark:text-white">Enter the title</label>
        <input type="text"
           name="username"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 placeholder:text-xl dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={title}  onChange={(e)=>setUsername(e.target.value)} /><br/>


        <label forname ="name" className="block  text-xl font-medium text-gray-900 dark:text-white">Name:</label><br/>
         <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={userId} onChange={(e)=>setUserId(e.target.value)} >
         {usersOptions}
        </select><br/>
     <label forname  ="name" className="block  text-xl font-medium text-gray-900 dark:text-white">News</label><br/>
      <textarea type="text"
       name="content"
        className="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={content} onChange={(e)=>setContent(e.target.value)}/><br/>
   <input type="file"
    className="block w-full text-l text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
     onChange={(e)=>setImage(e.target.files[0])}/><br/>
   <button onClick={handleSubmit} disabled={!button} className="bg-blue-600 border  border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  tracking-tight  font-bold hover:bg-red-500 text-white ">Submit</button>
     </div>
     </div>
    </>
     )
}