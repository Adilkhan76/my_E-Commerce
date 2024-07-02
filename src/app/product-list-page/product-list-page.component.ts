
// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../service/cart.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {
  products: Product[] = [];
  var1:boolean=false;

  constructor(private cartService: CartService, public router:Router) {}

  ngOnInit(): void {
   this.products = this.cartService.getProducts();
  }

  addToCart(product:Product): void {
    this.var1=true;
    this.cartService.addToCart(product);
    window.alert(`${product.title} has been added to the cart!`);
    this.router.navigate(['/product-list-page']);
  }

 
  getImageUrl(item: any){
    return item.url;
  }

  viewProductDetail(id: number) {
    // Navigate to the product detail page with the selected product's ID
    if(this.var1==true){
      this.router.navigate(['/product-list-page']);
      this.var1=false;
      return ;
    }
    this.router.navigate(['/product-details-page', id]);
   
}

}
