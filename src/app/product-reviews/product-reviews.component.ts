import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css'
})
export class ProductReviewsComponent implements OnInit {
  reviews:any;
  @Input() pid=""
  constructor(private service:StoreService){

  }
  ngOnInit(): void {
    console.log(this.service.getProductReview(this.pid));
    // console.log(this.pid);
    this.reviews = this.service.getProductReview(this.pid)
    console.log(this.reviews);
    
    
  }

}
