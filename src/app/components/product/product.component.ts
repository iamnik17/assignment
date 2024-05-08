import { Component } from '@angular/core';
import { APIService } from '../../api.service';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: any = [];
  pagedProducts: any = [];
  pageSize = 10; // Number of products per page
  totalProducts = 0; // Total number of products

  constructor(private apiService: APIService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
      this.totalProducts = this.products.length;
      this.updatePage(0); // Load first page
    });
  }

  public updatePage(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    this.pagedProducts = this.products.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  public pageChanged(event: any) {
    this.updatePage(event.pageIndex);
  }

  details(ev: any) {
    console.log(ev)
    this.router.navigate(['/product-details', ev.id]);
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    // this.router.navigate(['/cart'])
  }
}
