import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import PRODUCT from './/products.json';

interface Product {
  productName: string;
  productCode: string;
  releaseDate: string;
  price: string;
  starRating: string;
  imageUrl: any;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: Product[] = PRODUCT;

  constructor(private productService: ProductService ) { 
    this.Products = [];

  }

  


  showImageHandler() {

  }

  ngOnInit(): void {
    this.productService.getProductData()
    .subscribe((data) =>{
      console.log(data);
      this.Products = data;
    })

  }

}
