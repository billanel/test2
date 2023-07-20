// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  //styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProductList();
    });
  }
}
