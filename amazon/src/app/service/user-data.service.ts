import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url="https://dummyjson.com/products"

  postUrl="http://localhost:8081/user/login"

  constructor( private http:HttpClient) { 
    
    }

    loginUser(user:User):Observable<object>
    {
         console.log(user)
         return this.http.post(`${this.postUrl}`,user);
    }

    deatlis(){ 
      return this.http.get(this.url) 
     }
}
