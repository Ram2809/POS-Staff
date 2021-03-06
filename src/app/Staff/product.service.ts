import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='http://localhost:8081/api'
  constructor(private http:HttpClient) { }
  getProducts():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/product')
  }
  getProductByName(name:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/product/name/'+`${name}`)
  }
}
