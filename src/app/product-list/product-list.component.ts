import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: any;
  filteredProducts: any

  constructor(private productService: APIService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products; // Initialize filteredProducts with all products
    });
  }

  applyFilter(filterValue: any): void {
    this.filteredProducts = this.products.filter((product: any) =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  sortByPriceAscending(): void {
    this.filteredProducts.sort((a: any, b: any) => a.price - b.price);
  }

  sortByPriceDescending(): void {
    this.filteredProducts.sort((a: any, b: any) => b.price - a.price);
  }

  viewProductDetails(product: any): void {
    this.router.navigate(['/product', product.id]);
  }

}
