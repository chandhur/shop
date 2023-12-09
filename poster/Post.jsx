import { useSelector } from "react-redux"
import {selectAll }from "./posterSlice"
import Author from "./Author";
import TimeAgo from "./TimEAgo";
import ReactionButtons from "./ReactionButtons";
import Image from "./Image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function Post()
{

    useEffect(()=>{

      AOS.init({delay:500,duration:2000})
    },[])
    const value =useSelector(selectAll); 
    const sortValue = value.slice().sort((a,b)=> b.date.localeCompare(a.date))
    const Renter =sortValue.map((value,index)=>{
         return(
        <div key={index} 
        className=" my-5 shadow-2xl flex w-[700px] ml-[-300px] p-2 hover:bg-red-200 " 
        data-aos="flip-right">
            <div >
            <Image value={value.image}/>
            </div>
            <div className="p-3 text-xl">
        <p> <Author userId={value.userId}/> <span className="ml-auto"><TimeAgo timeStamp={value.date}/></span></p>  
        
        <h1 className="m-2"> <span className="font-medium"> Title:</span>{value.title}</h1>
        <h1 className="m-2"><span className="font-medium"> News:</span>{value.content}</h1>
        <div className="m-1">
        <ReactionButtons post={value}/>
           </div>
           </div>
         </div>)
    })

    return(
        <div className=" max-w-sm mx-auto my-4">
            
           <div  >
            {Renter}
            </div>
        
        </div>
    )
}