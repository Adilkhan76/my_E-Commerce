import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list-page', pathMatch: 'full' },
  { path: 'product-list-page', component: ProductListPageComponent },
  {path: 'product-details-page/:id', component: ProductDetailsPageComponent},  
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout-form', component: CheckOutFormComponent },
  { path: 'thank-you',component:ThankYouComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
