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
  Products!: Product;

  

  constructor(private productService: ProductService, private _router: Router, private route : ActivatedRoute) {
  
  }

  getSingleProduct(id: number) {
    this.productService.getSingleProduct(id)
      .subscribe((data) => {
        this.Products == data;

        console.log("Output of getSingleProduct " + this.Products);
      })

    // this.productService.getSingleProduct(id).subscribe(data=>this.product==data)
  }

  ngOnInit(): void { 
    const param = this.route.snapshot.paramMap.get('id');
    if (param){
      const id = +param;
      this.getSingleProduct(id);
    }
  }

  onBack() {
    this._router.navigate(['product-list']);
  }

}


