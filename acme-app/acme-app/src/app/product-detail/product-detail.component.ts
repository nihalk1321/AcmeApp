import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: string;
  starRating: string;
  imageUrl: any;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  Products: any ;

  param:any ;

  

  constructor(private productService: ProductService, private _router: Router, private route : ActivatedRoute) {
  }

  ngOnInit(): void { 
    this.param = this.route.snapshot.paramMap.get('productId');
    this.productService.getSingleProduct(this.param)
      .subscribe((data) => {
        // console.log(data);
        this.Products = data;
      })
      console.log("Variable - "+this.Products);
  }

  getSingleProduct(id: number) {
    this.productService.getSingleProduct(id)
      .subscribe((data) => {
        this.Products == data;

        console.log("Output of getSingleProduct " + this.Products);
      })
      console.log("Inside getSingleProduct in productDetails")
    // this.productService.getSingleProduct(id).subscribe(data=>this.product==data)
  }

  onBack() {
    this._router.navigate(['product-list']);
  }

}


