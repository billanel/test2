// src/app/product-add/product-add.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['../product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  newProduct: Product = { id : 0 , name: '', price: 0, description: '' };

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      // Handle successful addition (optional)
      // You can also navigate to the product list or show a success message here.
    });
  }
}
