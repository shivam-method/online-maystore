import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products : Product[] ;
currentCatId : number;

  constructor(private _productService: ProductService,
              private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(() =>{
      this.listOfProducts();
    })
  }

  listOfProducts(){

    const hasCategoryId: boolean = this._activatedRouter.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCatId = +this._activatedRouter.snapshot.paramMap.get('id');
    }else{
      this.currentCatId =101;
    }

    this._productService.getProduct(this.currentCatId).subscribe(
      data => this.products= data
    )
  }

}
