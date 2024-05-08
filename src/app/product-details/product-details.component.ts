import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;

  constructor(private route: ActivatedRoute,
    private productService: APIService) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      // next : value => console.log('Observable emitted the next value: ' + value),
      // error: err => console.error('Observable emitted an error: ' + err),
      (params: any) => {
        this.productId = +params.get('id'); // Get the product ID from the route
        this.loadProductDetails(this.productId);
      }, (err) => {
        //snackbarr material 
        alert(err)
        console.log(err)
      }
    );
  }
  loadProductDetails(productId: number) {
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }
}


