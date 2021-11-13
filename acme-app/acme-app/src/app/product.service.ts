import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = "http://localhost:4200/assets/products.json";

  constructor(private httpClient: HttpClient) {
    console.log("From Service")
  }

  HttpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProductData(): Observable<any> {
    
    return this.httpClient.get<any>(this.url);
  }

}
