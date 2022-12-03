import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient) { }

  getAllUser():Observable<any>{
    return this.httpService.get('http://localhost:3000/users')
   //return this._http.get('${this.}')
  }

  addUser(data:any):Observable<any>{
    return this.httpService.post('http://localhost:3000/createuser',data)
   }

   remouveUser(id:any):Observable<any>{
     return this.httpService.delete('http://localhost:3000/user/'+id)
    }
    updateUser(data:any,id:any){
     return this.httpService.patch('http://localhost:3000/user/'+id,data)
   }

   getById(id:number)
   {
     return this.httpService.get('http://localhost:3000/user/'+id)
   }

}

