import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


interface Product {
  productId:number;
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
  showImage=false;
  Products: Product[];

  constructor(private productService: ProductService ) { 
    this.Products = [];
  }
  
  showImageHandler() {}

  toggleImage(){
    this.showImage=!this.showImage;
  }


  ngOnInit(): void {
    this.productService.getProductData()
    .subscribe((data) =>{
      console.log(data);
      this.Products = data;
    })

  }

}
