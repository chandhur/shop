

import { useState } from 'react';
import Allo from './assets/Allo';
// import Click from './assets/Click'
 function App()
{
  // const[set,set1]=useState("");
  // const[age,age1]=useState("");
  // const[email,email1]=useState("");
  // const[pass,pass1]=useState("");
  // console.log(set)
  const[input, input1]=useState({});

  function handleClick(e)
  {
    e.preventDefault();
    console.log(input)
   
    // console.log(input)
    // console.log("submit")
    //  console.log(set)
    //  console.log(age)
    //  console.log(email)
    //  console.log(pass)
  }
  // {input1}} ({name:e.target.value})
    
 return(
       <div>  
      <form onSubmit={handleClick}>
      <label>Enter-the-Name </label> 
      <input type="text"
      onChange={(e) =>{input1((previousState)=>{return {...previousState,name:e.target.value} }  )  }  }/><br/>
      <label>Enter-the-age </label>
      <input type="number"
      onChange={(e) =>{input1((previousState)=>{return {...previousState,number:e.target.value}})}} /> <br/>
      <label>Enter-the-Email </label>
      <input type="email
      "onChange={(e) =>{input1((previousState)=>{return {...previousState,email:e.target.value}})}}/> <br/>
      <label>Enter-the-password </label>
      <input type="password"
      onChange={(e) =>{input1((previousState)=> {return {...previousState,pass:e.target.value}})}}/> <br/>
     <button >CLICK</button>
     </form>
      
     
    </div>
      
        
);
}
export default App;




 /* ageFlagChanges={ageFlagChanges} 
      { ageFlag ? (<>
        <div>Yes, Age is greater than or equal to 40</div>
        <div>Process the insurance.</div>
        </>)
      : (<div>Sorry, Age is less than 40.</div>)
      }   */
      