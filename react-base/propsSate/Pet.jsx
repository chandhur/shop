import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pet(props)

//function pet({umage,pet,pet})=array destructure

{
return(
         <div>
        <div  
        style={{width:250}}
        className="shadow-lg p-3 mb-5 rounded">
        <img 
        style={{height:200,width:200}}
        className="valye"
        src={props.image}
        alt={props.pet}  />
        <h3 ><span style={{color:"grey"}}>pet:</span>{props.pet}</h3>
        <h3><span style={{color:"grey"}}>age:</span>{props.agee}</h3>
        <h3><span style={{color:"grey"}}>price:</span>{props.price}</h3>
        <h3><span style={{color:"grey"}}>cont:</span>{props.number}</h3>
        
        </div>
          </div>
        
   
        )
}