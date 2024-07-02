// product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  
  product: Product | undefined
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  
  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      const idNumber = +productId; // Convert to number
      this.product = this.cartService.getProductById(idNumber);
      if (!this.product) {
        console.error('Product not found'); 
      }
    } else {
      console.error('Product ID is null');
    }
  }

  getImageUrl(item: any){
    return item.url;
  }
  
}
