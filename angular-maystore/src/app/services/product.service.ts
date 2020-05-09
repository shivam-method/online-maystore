import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //import the http client module in our root module i.e app.module.ts

  private baseUrl="http://localhost:8080/api/products";
  constructor( private httpClient: HttpClient) { }//injected the http client

  getProduct(curCatId: number): Observable<Product[]>{
    const searchUrl =`${this.baseUrl}/search/categoryId?id=${curCatId}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products )
    );
  }
}

interface GetResponseProducts{
  _embedded:{
    products :Product[];
  }
}