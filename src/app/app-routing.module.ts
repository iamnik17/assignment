import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  // {
  //   path: 'products',
  //   component: ProductComponent,
  //   // component: ProductListComponent
  // },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'checkout',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
