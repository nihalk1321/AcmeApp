import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


interface Product {
  productId: number;
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
  showImage = false;
  imageWidth = 50;
  imageMargin = 2;
  Products: Product[];
  filteredProduct: Product[] = [];

  constructor(private productService: ProductService) {
    this.Products = [];
  }

  _listFilter = "";

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter): this.Products;
  
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Products.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }


  ngOnInit(): void {
    this.productService.getProductData()
      .subscribe((data) => {
        console.log(data);
        this.Products = data;
      })

  }

}
