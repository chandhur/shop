import { MyContext } from "../Contax/MyContext"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

 const usehook = ()=>{
     const [offers,setOffers]=useState( 300 );
     const low =()=> setOffers(c => c  - 1)
     return[offers,low]

 }

export default function Product({add,handle,handle1,visable})

{  
  const[ offers,low] = usehook()
   useEffect(()=>{
    const timer=setInterval(()=>low(),1000);
        return () => {clearInterval(timer)}
  },[])
  

         
   const{ dark,setDark}=useContext(MyContext);
         
        return(<>
        <h1 className=" container ml-auto text-2xl p-3 text-bold mt-2">Today Offer Timeing Is Closed On :<span className="text-3xl">{offers}</span>sec</h1>
        <h1 className= "bg-white text-center underline text-2xl">ALL PRODUCT</h1>
         {
          
              visable && add.products.map((product,index)=>{
               
              
              const {thumbnail,brand,description,title,price,discountPercentage,rating,stock} = product
             return(
              <>
                 
            <div 
            style={ dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white"}}
             key={index}  className= "container bg-white  mx-auto shadow-xl shadow-black-200/50 hover:shadow-xl hover:shadow-black-500/50  flex m-10  rounded-2xl hover:bg-slate-600">
             <div className="flex   justify-evenly " >
             <img
             className="rounded-l-2xl"
             src={thumbnail}
             alt={brand}/>
             <div 
             className="text-xl w-30 m-10 "
             key={index}
             >
             <h6 className="m-1"><span className="font-medium">Brand :</span>{brand}</h6> 
             <h6 className="m-1"><span className="font-medium">Title :</span>{title}</h6> 
             <h6 className="m-1"><span className="font-medium">Price :</span> ₹{price*74}</h6>
             <h6 className="m-1"><span className="font-medium">discountPercentage :</span>{discountPercentage}</h6>
             <h6 className="m-1"><span className="font-medium">Rating :</span>{rating}</h6>
             <h6 className="m-1"><span className="font-medium">Stock :</span>{stock}</h6>
             <h6 className="text-center m-5 font-medium">Description :{description}</h6>
             <div>
              <button
               className=" hover:bg-red-500 rounded m-5 p-3 shadow-xl shadow-black-200/50  border border-gray-500"
               onClick={()=>handle(product)}
               >AddCart</button>
              <button className="border border-gray-500  shadow-xl shadow-black-200/50 rounded m-5 p-3 text-white bg-blue-500 hover:bg-white hover:text-black"
                onClick={()=>handle1(product)} ><Link to="/productList">ViewProduct </Link></button>
             </div>
             </div>
             </div>
             </div>
            </>
            
             )}) 
              }
               </>
        
)
}