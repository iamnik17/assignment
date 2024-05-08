import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgxStripeModule, StripePaymentElementComponent, provideNgxStripe } from 'ngx-stripe';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { TableComponent } from './table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    LoginComponent,
    ChildComponent,
    TableComponent,
    AddEmployeeDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    NgxStripeModule.forRoot(),
    StripePaymentElementComponent,
    // MatDialogModule,
    MatCardModule,
    // MatProgressSpinnerModule
  ],
  providers: [provideAnimationsAsync(), provideNgxStripe()],
  bootstrap: [AppComponent],
})
export class AppModule { }
