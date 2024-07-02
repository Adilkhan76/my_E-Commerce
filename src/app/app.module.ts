import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    ProductDetailsPageComponent,
    ShoppingCartComponent,
    CheckOutFormComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
