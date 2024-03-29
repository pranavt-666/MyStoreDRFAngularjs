import { Component, OnInit} from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:any;
  constructor(private service:StoreService){
  }

  ngOnInit(): void {
    this.service.getAllProducts().then(res=>res.json()).then(data=>this.products=data)
}
}
