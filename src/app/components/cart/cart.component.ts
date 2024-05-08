import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: { product: any, quantity: number }[] = [];
  subtotal: number = 0;
  shippingCharge: number = 100;
  taxRate: number = 0.1; // 10%

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateSubtotal();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateCartItemQuantity(productId, quantity);
    this.loadCart();
  }

  calculateSubtotal(): void {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  calculateTax(): number {
    return this.subtotal * this.taxRate;
  }

  calculateTotal(): number {
    return this.subtotal + this.calculateTax() + this.shippingCharge;
  }

  checkout(): void {
    // Navigate to the checkout component
    this.router.navigate(['/checkout']);
  }

}
