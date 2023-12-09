import { useState } from "react"
import { useDispatch } from "react-redux"
import { AutherAdd } from "./userSlice"
import { useNavigate } from "react-router-dom"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function AuthorDeatlis()
{
    const[name,setAuthor]=useState('')

    const navgaition = useNavigate()
  
    const dispatch = useDispatch()
   
     const handleSubmit = ()=> 
    {
        
         dispatch(AutherAdd(name))
         
         toast("Your-account-is-created "+name)

       setTimeout(()=>{
           navgaition("/")
       },6000)
        
    }
  
   

   return(<div  >
      <div 
      className="container mx-auto  w-[400px]  p-10 shadow-2xl  mt-[100px] rounded bg-cover bg-center ">
       
        <h1 className="text-red-500 font-bold text-2xl font-serif m-3">DAY TO DAY</h1>
        <p className="m-3 font-semibold text-gray-500">Update your <q>knowledage</q> in your self</p>
       <input type="text"  className="border-2 border-gray-500 p-3 m-2 w-[300px] rounded bg-none" placeholder="Enter the Name.." name="username"/><br/>
       <input type="email" className="border-2 border-gray-500 p-3 m-2  w-[300px] rounded" placeholder="Enter the Email.." name="username"/><br/>
       <input type="number" className="border-2 border-gray-500 p-3 m-2  w-[300px] rounded" placeholder="Enter the MobileNumber.." name="mobileNumber"/><br/>
       <input type="text"   className="border-2  border-gray-500 p-3 m-2  w-[300px] rounded" placeholder="What you name you like ?" name="name"onChange={(e)=>setAuthor(e.target.value)}/><br/>
      <button
        className="w-[300px] h-[50px] bg-orange-300 m-1 border-gray-500 border font-bold text-white my-3 hover:bg-red-600 rounded"
         onClick={handleSubmit}
         
         >  Submit</button>
      <ToastContainer/>
      
      </div>

    </div>)
}