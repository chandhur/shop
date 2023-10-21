import React from 'react'
import Header from "./Header"
import { Routes ,Route} from 'react-router-dom'
import Cart from './Cart'
import Product from './Product'
import ProductList1 from './ProductList1'
import { useState,useEffect } from 'react'
import SearchBar from './SearchBar'
import { MyContext } from "../Contax/MyContext"
// import { MyContext } from '..Contax/MyContext'


const getItem=()=>
{
     let list =localStorage.getItem("items")

     if(list)
     {
      return JSON.parse(localStorage.getItem("items"))
     }
     else
     {
      return []
     }
}


function Total() {
  const[loading,setLoading]=useState(true);
  const[add, setIndex]=useState([]);
  const[cart,addCart]=useState(getItem()); // getItem()
  const[search,setSearch]=useState();
  const[view,setview]=useState([]);
  const[search1,setSearch1]=useState();
  const[state,setSate]=useState(false)
  const[visable,inVisable]=useState(true)
  const[dark,setDark]=useState(false)
 
  

        useEffect(()=>
      {
       const fetchData = async()=>
      {
      const url = "https://dummyjson.com/products"
      setLoading(true)
      try
      {
        const change = await fetch(url);
        const add = await change.json();
        setLoading(false)
        setIndex(add)
       
      }
      catch(err)
      {
           console.log(err) 
      } }
      fetchData();
       },[])

      
   useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(cart)) 
    },[cart])

     if(loading)
     {
      return(<>
      <h1 className='text-3xl text-center '>Loading...</h1>
      </>)
     }


    const handle =(product)=>addCart([...cart,product])
    
  
    const handle1=(product)=> setview([product])
  
        
    const handle3=()=>{ 
         var sum=add.products.filter((value)=>value.title.toLowerCase().includes(search.toLowerCase()))
        setSearch1(sum)
        setSate(true)
        inVisable(!visable)
      }

     const handle4 =()=> setDark(!dark)
     
     
     return (
    <section >
      <MyContext.Provider value={{dark,setDark}}>
       <Header search={search} setSearch={setSearch} cart={cart} handle3={handle3} handle4={handle4} />
       <SearchBar  search1={search1} state={state}/>
       <div>
       <Routes>
        < Route path="/"     element={<Product add={add} handle={handle} handle1={handle1} visable={visable} />}/>
        < Route path="/cart" element={<Cart  cart={cart}/> }/>
        <Route  path="/productList" element={<ProductList1 handle1={handle1}  view={view}  />}/>
       </Routes>
      </div>
      </MyContext.Provider>
   </section>
  )
}

export default Total