import React from 'react'
import { MyContext } from '../Contax/MyContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
function Header({search,setSearch,handle3,handle4}) {

  const { dark ,setDark }=useContext(MyContext);

  
    return (
    <nav className="container mx-auto bg-red-400  h-30 mb-1 p-5 text-fuchsia-50 text-2xl">
      <div className="flex justify-center">
        <img
         src="https://images-platform.99static.com//pZiz_DAicT7hKU-zDvH_6AQgFFc=/423x1663:1203x2443/fit-in/590x590/99designs-contests-attachments/87/87409/attachment_87409860"
        className='h-14 mt-3  mr-auto'
        />
       <center>
        <div className='flex justify-center mt-6' >
        <input 
        type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="h-8 w-30 bg-gray-50 border rounded text-black"
        placeholder='Enter-the-Product'
        />
         <button onClick={handle3} > 
         <svg
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
         className="w-6 h-6 "
         >
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
        </div>
        </center>
         <div 
         className='ml-auto mt-5' >
           <button className=" p-3 rounded bg-orange-100  border border-black  text-black hover:bg-red-400" onClick={handle4}>{dark ?"light" : "Dark"}</button>
        <Link to="/cart" className="bg-red-600 hover:bg-yellow-300 p-3 m-3 rounded-lg">Cart </Link>
         </div>
        </div>
    </nav>

    
  )
}

export default Header