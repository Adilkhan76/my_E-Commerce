import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [];
  total:number=0;
  product: any;
  quanty:number=1;

  constructor(private cartService: CartService, public router:Router) {}

  ngOnInit(): void {
   this.getaddedProduct();
   this.totalprice();
  }

  

  increaseQuantity(product: Product) {
    this.cartService.Increase(product);
    this.totalprice();
  }

  decreaseQuantity(product: Product) {
    this.cartService.Decrease(product);
    this.totalprice();
  }

  getaddedProduct():void{
    this.products = this.cartService.getProductsInCart();
  }

  deleteFromCart(product: Product): void {
    this.cartService.removeFromCart(product.id);
    this.getaddedProduct();  // Refresh the list of products in the cart
    this.totalprice();

  }

  ClearCart():void{
    this.cartService.clearcart();
    this.getaddedProduct();  // Refresh the list of products in the cart
    this.totalprice();

  }

  totalprice():void{
    this.total=this.cartService.TotalPrice();
  }
  checkoutFormDetails(){
    this.router.navigate(['/checkout-form']);
  }
  getImageUrl(item: any){
    return item.url;
  }
  

  

  


}

