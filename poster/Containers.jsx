import { Route,Routes } from "react-router-dom"
import AuthorDeatlis from "./AuthorDeatlis"
import { Provider } from "react-redux";
import {store } from "./store"
import Show from "../Show"

export default function containers()
{
    return(
        <Provider store={store}>
           <Routes>
               <Route path="/login" element= {<AuthorDeatlis/>}/>
               <Route path="/" element={<Show/>}/>
           </Routes>
        </Provider>
        
    )
}