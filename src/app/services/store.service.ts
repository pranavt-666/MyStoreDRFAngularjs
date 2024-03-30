import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }


  reviews=[
    {"id":1,"pid":1,"comment":"good","user":"anj","rating":4},
    {"id":2,"pid":2,"comment":"worth","user":"anj","rating":5},
    {"id":3, "pid":3,"comment":"best product","user":"anj","rating":4},
    {"id":4,"pid":3,"comment":"good","user":"anj","rating":5},
    {"id":5, "pid":4,"comment":"worth","user":"anj","rating":3},
    {"id":6,"pid":4,"comment":"mst buy","user":"anj","rating":5},
    {"id":7, "pid":5, "comment":"awsone","user":"anj","rating":4},
    {"id":8,"pid":5,"comment":"good","user":"anj","rating":4},
    {"id":9,"pid":6, "comment":"worth","user":"anj","rating":5},
    {"id":10,"pid":6,"comment":"best","user":"anj","rating":5},
    {"id":11,"pid":7,"comnent":"good one","user":"anj","rating":4},
    {"id":12,"pid":7,"comnent":"good","user":"anj","rating":4}]


  getAllProducts(){
    return fetch('https://fakestoreapi.com/products')
  }

  getProductDetail(id:any){
    return fetch(`https://fakestoreapi.com/products/${id}`)
  }

  getProductReview(id:any){
    console.log(typeof this.reviews.filter(n=>n.pid==id));
    return this.reviews.filter(n=>n.pid==id)
  }
  addProductReview(data:any, id:any){
    data['pid']=id
    this.reviews.push(data)
    console.log(this.reviews);
  }
}
