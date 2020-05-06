import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products : Product[] ;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  listOfProducts(){
    this._productService.getProduct().subscribe(
      data => this.products= data
    )
  }

}
