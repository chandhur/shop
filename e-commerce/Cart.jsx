import React, { useState } from 'react'
import { MyContext } from '../Contax/MyContext'
import { useContext } from 'react'

function Cart({cart}) {

  const{dark,setDark}=useContext(MyContext)

  const[fliter,fliterItem]=useState(cart)
  
  
 const value=fliter.filter((items,index)=>{return items.id  !== index})


  const handleCart =(index)=>
{   const delet = [... value];
    delet.splice(index,1)
    fliterItem(delet)
  }
  
   return (
   <>
   <h1 className='text-center text-2xl'>CART-PAGE</h1>
    {
       value.map((items,index)=>{
       return(
        <>
        <div 
        key={index} 
        className='container mx-auto  rounded m-5 shadow-2xl shadow-black-500/50 h-50 w-50 '
        style={ dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white"}}
        >
          <div className=' flex '>
         <img src={items.thumbnail}
              alt={items.brand}/>
              <div className="m-10">
           <h1 className="mx auto text-2xl m-3  ml-3">{items.description}</h1>
          <h1 className="text-2xl m-1">Mobel:{items.title }</h1>
          <h1 className="text-2xl m-1">Peice:₹{items.price*74}</h1>
          <div>
          <button 
          className='border border-black p-3 rounded bg-red-400 hover:bg-blue-300 m-5'
          onClick={()=>{handleCart(index)}}
           >ROMVE</button>
          </div>
          </div>
          </div>
        
          </div>
        </>
       
        )
      })
    }
    <h1>TotalAmout:0</h1>
  </>)
}

export default Cart