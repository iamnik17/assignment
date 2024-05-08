import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: any, quantity: number }[] = [];

  constructor() { }

  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product: product, quantity: 1 });
    }
    this.saveCartData();
  }

  removeFromCart(productId: number): void {
    const index = this.cartItems.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartData();
    }
  }

  updateCartItemQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCartData();
    }
  }

  getCartItems(): { product: any, quantity: number }[] {
    return this.cartItems;
  }

  calculateSubtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  // Implement functions for tax, shipping, and total calculation if needed

  private saveCartData(): void {
    // Save cart data to localStorage or backend server
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
