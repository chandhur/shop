import { useState } from "react"
import { MyContext } from "../Contax/MyContext"
import { useContext } from "react"

export default function ProductList1({view})
{

    const{dark,setDark}=useContext(MyContext);
    
    const [product,productList]=useState(view)
  
      return(
     <div >
       {product.map((live)=>{
                return(<div key={live.id}>
                { 
                <div
                style={ dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white"}}
                 className="container mx-auto border border-black rounded">
                    <div className="flex m-5">
                    <img className="w-1/5" src={live.images[0]}/>
                    <img className="w-1/5" src={live.images[1]}/>
                    <img className="w-1/5" src={live.images[2]}/>
                    <img  className="w-1/5" src={live.images[3]}/>
                    <img  className="w-1/5"src={live.images[4]}/>
                    </div>
                   <div className="flex   justify-evenly m-5 " >
             <img
             src={live.thumbnail}
             alt={live.brand} />
             <div className="text-xl w-30 m-10 ">
             <h6 className="m-1"><span className="font-medium">Brand :</span>{live.brand}</h6> 
            <h6 className="m-1"><span className="font-medium">Price :</span>₹{live.price*74}</h6>
             <h6 className="m-1"><span className="font-medium">discountPercentage :</span>{live.discountPercentage}</h6>
             <h6 className="m-1"><span className="font-medium">Rating :</span>{live.rating}</h6>
             <h6 className="m-1"><span className="font-medium">Stock :</span>{live.stock}</h6>
             <h6 className="text-center m-5 font-medium">Description :{live.description}</h6>
             </div> 
             </div>
            </div>
                }
                </div>) }) }
                 </div>
   )        
}