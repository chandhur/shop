import React from 'react'
import { useState,useEffect} from 'react'


function ProductList() {

    const [image,setImage]=useState([

           { url:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=800"},
           {url:" https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&w=800"}
        

    ])
    const[update,setUpdate]=useState(0)


 useEffect(()=>{

    const timer =setTimeout(()=>{

        if(update === 0)
        {
            setUpdate(update+1)
        }
        else
        {
            setUpdate(0)
        }
        

    },3000)
   
    return ()=> clearTimeout(timer)

    },[update])

//     console.log(image)
  return (
    <div className='container mx-auto'>
     <nav className="flex  bg-orange-300 text-lg h-20 top-0 ">
<h1 className='mr-auto font-bold m-5'>FLOWER-SHOP</h1>
<div className='flex justify-center gap-5 m-5  text-white'>
<a  className=" hover:text-2xl hover:underline hover:text-black "href="#"> Home</a>
<a  className=" hover:text-2xl hover:underline hover:text-black" href="about"> About</a>
 <a className=" hover:text-2xl hover:underline hover:text-black" href="#"> ContactUs</a>
</div>
<button className="ml-auto border border-black rounded bg-orange-400 m-5 w-20 hover:bg-orange-300 hover:border-white  ">Shop</button>
 </nav>
 <section className='flex text-white'>
    <img
    className="bg-cover"
    src={image[update].url}/>
    <div className=" bg-emerald-950">
        <h1 className='text-center text-4xl m-5 underline'>Flower</h1>
        <p className="text-xl indent-12 m-5" >
          A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants .plants of the division Angiospermae.Flowers produce gametophytes, which in flowering plants consist of a few haploid cells which produce gametes. The "male" gametophyte, which produces non-motile sperm, is enclosed within pollen grains; the "female" gametophyte is contained within the ovule. When pollen from the anther of a flower is deposited on the stigma, this is called pollination. Some flowers may self-pollinate, producing seed using pollen from the same flower or a different flower of the same plant, but others have mechanisms to prevent self-pollination and rely on cross-pollination, when pollen is transferred from the anther of one flower to the stigma of another flower on a different individual of the same species.
        </p>
     </div>
</section>
<section id="adout"  className='bg-pink-200 p-10 '>
<a href="about"><h1 className='text-3xl text-center underline m-5 '>AboutUs</h1></a>
<div className='flex container'>
<div className='w-1/3  bg-slate-400 p-5 ml-3 hover:bg-pink-200 hover:border hover: border-black hover:rounded rounded'>
    <h1 className='text-2xl text-center m-3'>ourSrevice</h1>
    <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur in quasi quam. Dolores delectus, quae, omnis amet cum maxime necessitatibus sint cumque, nam repudiandae est velit dignissimos sapiente? Quisquam, atque.</p>
</div>
<div className='w-1/3  bg-slate-400 p-5 ml-3  hover:bg-pink-200 hover:border hover: border-black hover:rounded rounded'>
    <h1 className="text-2xl text-center m-3">Location</h1>
    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, libero dolore sint quas nobis laudantium. Illo cumque modi beatae, quam neque, suscipit architecto aperiam sint deleniti accusamus aliquam maiores commodi.</p>
</div>
<div className='w-1/3  bg-slate-400 p-5 ml-3  hover:bg-pink-200 hover:border hover: border-black hover:rounded rounded'>
    <h1 className='text-2xl text-center m-3'> Deatlis</h1>
    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos obcaecati blanditiis atque, culpa dolorem velit vitae dolore repellat repellendus eligendi rem eius! Assumenda labore asperiores praesentium nemo nam sint.</p>
</div>
</div>
</section>
<section className='bg-orange-300 '>

    <h1 className='text-3xl text-center p-3 underline'>ContactUs</h1>
    <div className='flex m-5 p-5 rounded' >
        <div className='w-1/2 bg-slate-500 ml-5 text-2xl '>
            <div className="text-center ">
                <h1 className='m-5'>Company-Offical-Id</h1><hr/>
                <h1><span className='text-white'>Contact</span>:9965987143 </h1>
                <h1><span className='text-white'>E-mail</span>:chandhurua@gamil.com</h1>
                <h1>Social media link</h1>
                <div className='flex  justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
  <path fillRule="evenodd" d="M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>

</div>
<hr/>
<h1 className='text-center  hover:bg-yellow-300 m-20'>Thankyou for Visting My Page...</h1>

             </div>
        </div>
        <div className="w-1/2 bg-pink-300 ml-5  ">
            <from  >
                <div className='text-center border border-black rounded m-10 p-5'>
                <h1 className="text-2xl text-center m-4 ">LOGIN</h1><hr/>
                <label forName="name"  className='text-xl'>Name:</label><br/>
                <input  className="border  rounded border-b-4 border-indigo-500 pl-10"type="text" ariaLabel='text'/><br/>
                < label forName="name" className='text-xl'>E-mail:</label><br/>
                <input className='border  border-b-4 border-indigo-500 rounded pl-10' type="text" ariaLabel='text'/><br/>
                <label forName="name" className='text-xl'>Comments</label><br/>
                <textarea type="text" className='border rounded-lg border-b-4 border-indigo-500 pl-10' ariaLabel='text'/><br/>
                <button className='border border-black bg-pink-600 rounded p-2 hover:bg-pink-300 hover:text-xl px-10 m-5'>SUBMIT</button>
                </div>


            </from>
        </div>
    
    
    
    
    
    </div>
</section>




</div>
  )
}

export default ProductList