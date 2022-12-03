import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpClient) { }


  getAllProduct():Observable<any>{
    return this.httpService.get('http://localhost:3000/products')
   //return this._http.get('${this.}')
  }

  addProduct(data:any):Observable<any>{
   return this.httpService.post('http://localhost:3000/createproduct',data)
  }

  remouveProduct(id:any):Observable<any>{
    return this.httpService.delete('http://localhost:3000/product/'+id)
   }
   updateProduct(data:any,id:any){
    return this.httpService.patch('http://localhost:3000/product/'+id,data)
  }

  getById(id:number)
  {
    return this.httpService.get('http://localhost:3000/product/'+id)
  }
}
