import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductListComponent } from './product-list/product-list.component';
import { catchError, map, mapTo, tap } from 'rxjs/operators'

interface Product {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: string;
  starRating: string;
  imageUrl: any;
}


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = "http://localhost:4200/assets/products.json";

  url_singleProduct = "http://localhost:4200/product/1"

  // product: Product[];

  constructor(private httpClient: HttpClient) {
    console.log("From Service")
    // this.product = [];
  }

  HttpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProductData(): Observable<Product[]> {

    return this.httpClient.get<any>(this.url);

  }

  getSingleProduct(id: number): Observable<Product | undefined> {
    // return this.httpClient.get<any>(this.url)
    //   .sourcepipe(filter((p: { productId: any; }) => p.productId === id));

    // var newProduct = this.product.filter(function (ele: { productId: any; }) {
    //   return ele.productId == id;
    // })
    // return this.httpClient.get<any>(this.url);

    return this.getProductData()
      .pipe(map((product:Product[])=>product.find(p=>p.productId==id)));

  }


}
