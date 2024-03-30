import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  getAllProducts(){
    return fetch('https://fakestoreapi.com/products')
  }

  getProductDetail(id:any){
    return fetch(`https://fakestoreapi.com/products/${id}`)
  }
}
