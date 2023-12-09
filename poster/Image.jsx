export default function Image({value})
{

  
    return(
         <>
         {
            value  ? (<img  className="h-[200px] w-[200px]" src={URL.createObjectURL(value)}/>):(<img src={value} />)  
         }
        </>

    )
}