import { useSelector } from "react-redux"
import {selectAllUser} from "./userSlice"

export default function Author({userId})
{   
    const users =useSelector(selectAllUser)
     const author =users.find(user =>  user.name == userId) ;
     return <span className="m-3 "><span className="font-medium">UserName:</span>{author ? author.name :"unkown user" }</span>
}