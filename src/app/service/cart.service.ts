// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Product[] = []
  public TotalSum: number = 0;
  public total:number=0;
  private products: Product[] = [
    {
      id: 1, Author: 'James Johnson', name: 'Calculas', title: 'Engg mathematics', price: 350, description: 'An extensive guide to engineering mathematics covering various topics and problem-solving techniques.',
    url:"https://i.postimg.cc/s2Bdq6Sh/antony-hyson-s-7-Rg-Wu-Llea24-unsplash.jpg",quantity: 1},
    {
      id: 2, Author: 'Dennis Ritchie', name: 'python for Beginner', title: 'Python', price: 200, description: 'An extensive guide to python covering various topics and problem-solving techniques.',
      url:"https://i.postimg.cc/YCBT92Xs/faisal-BI465ksrl-Ws-unsplash.jpg",quantity: 1},
    {
      id: 3, Author: 'villiam son', name: 'Java In-depth', title: 'Java', price: 300, description: 'An extensive guide to java covering various topics and problem-solving techniques.',
      url:"https://i.postimg.cc/t4cW9J1M/annie-spratt-gl7jo-Oa-ABl-I-unsplash.jpg",quantity: 1},
    {
      id: 4, Author: 'mark juker', name: 'Learn databsase Management System', title: 'DBMS', price: 400, description: 'An extensive guide to datdabase management  covering various topics and problem-solving techniques.',
      url:"https://i.postimg.cc/2yx9thSJ/florencia-viadana-1-J8k0qq-Uf-YY-unsplash.jpg",quantity: 1},
    {
      id: 5, Author: 'Jamonsor', name: 'Build Architecture of Computer', title: 'Computer Archetecture and Organization', price: 500, description: 'An extensive guide to COA covering various topics and problem-solving techniques.',
      url:"https://i.postimg.cc/Hnj7GCYg/toa-heftiba-ip9-R11-FMb-V8-unsplash.jpg",quantity: 1},
    {
      id: 6, Author: 'wallen jucker', name: 'Know About Network', title: 'Computer Network', price: 460, description: 'An extensive guide to CN covering various topics and problem-solving techniques.',
      url:"https://i.postimg.cc/T2qRxsL8/alexei-maridashvili-Ve-NJNw-Cux6-Y-unsplash.jpg",quantity: 1},
    
    // Add more products as needed
  ]

  constructor() { }

  Increase(product:Product){
    product.quantity=product.quantity+1;
      
  }

  Decrease(product: Product){
    if (product.quantity > 1) {
        product.quantity=product.quantity-1;
    }
  }

 TotalPrice() {
    for (let i = 0; i < this.cart.length; i++) {
      this.TotalSum = this.TotalSum + (this.cart[i].price*this.cart[i].quantity);
    }
    this.total=this.TotalSum
    this.TotalSum=0;
    return this.total;
  }





  addToCart(product: Product): void {
    this.cart.push(product);
    this.TotalPrice();
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.TotalPrice();
  }


  clearcart(): void {
    this.cart = [];
    
  }

  getProductsInCart(): Product[] {
    return this.cart;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product: { id: number; }) => product.id === id);
  }
}
