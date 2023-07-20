// src/app/product-update/product-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
 // styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productId: number =0;
  product: Product = { id: 0, name: '', price: 0, description: '' }; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.params['id'];
    this.getProductById();
  }

  getProductById() {
    this.productService.getProduct(this.productId).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productId, this.product).subscribe(() => {
      // Handle successful update (optional)
      // You can also navigate to the product list or show a success message here.
    });
  }
}
