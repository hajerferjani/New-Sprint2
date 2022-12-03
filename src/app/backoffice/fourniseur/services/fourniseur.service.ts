import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FourniseurService {



  constructor(private httpService:HttpClient) { }

  getAllFourniseur():Observable<any>{
    return this.httpService.get('http://localhost:3000/fourniseurs')
   //return this._http.get('${this.}')
  }

  addFourniseur(data:any):Observable<any>{
   return this.httpService.post('http://localhost:3000/createfourniseur',data)
  }

  remouveFourniseur(id:any):Observable<any>{
    return this.httpService.delete('http://localhost:3000/fourniseur/'+id)
   }
   updateFourniseur(data:any,id:any){
    return this.httpService.patch('http://localhost:3000/fourniseur/'+id,data)
  }

  getById(id:number)
  {
    return this.httpService.get('http://localhost:3000/fourniseur/'+id)
  }

}
