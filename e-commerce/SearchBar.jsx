
import { MyContext } from "../Contax/MyContext"
import { useContext } from "react"

export default function SearchBar({search1,state})
{   
    const{dark,setDark} =useContext(MyContext)
       return(<>
       {
       state && search1.map((product,index)=>
        { <h1>Result</h1>
            const {thumbnail,brand,description,title,price,discountPercentage,rating,stock} = product
            return(
                <>
            <div  
            style={ dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white"}}
            key={index}  className= "container bg-white  mx-auto   shadow-xl shadow-black-200/50    hover:shadow-xl hover:shadow-black-500/50  flex m-10  rounded-2xl hover:bg-red-100">
             <div className="flex   justify-evenly " >
             <img
             className="rounded-l-2xl"
             src={thumbnail}
             alt={brand}/>
             <div className="text-xl w-30 m-10 ">
             <h6 className="m-1"><span className="font-medium">Brand :</span>{brand}</h6> 
             <h6 className="m-1"><span className="font-medium">Title :</span>{title}</h6> 
             <h6 className="m-1"><span className="font-medium">Price :</span> ₹{price*74}</h6>
             <h6 className="m-1"><span className="font-medium">discountPercentage :</span>{discountPercentage}</h6>
             <h6 className="m-1"><span className="font-medium">Rating :</span>{rating}</h6>
             <h6 className="m-1"><span className="font-medium">Stock :</span>{stock}</h6>
             <h6 className="text-center m-5 font-medium">Description :{description}</h6>
             <div>
              {/* <button
               className=" hover:bg-red-500 rounded m-5 p-3 shadow-xl shadow-black-200/50  border border-gray-500"
               onClick={()=>handle(product)}
               >AddCart</button>
              <button className="border border-gray-500  shadow-xl shadow-black-200/50 rounded m-5 p-3 text-white bg-blue-500 hover:bg-white hover:text-black"
                onClick={()=>handle1(product)} ><Link to="/productList">ViewProduct </Link></button> */}
             </div>
             </div>
             </div>
             </div>
             </>

            )
        })
    }
    
    </>)
}