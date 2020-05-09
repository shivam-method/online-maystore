import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { PageNotAvailComponent } from './components/page-not-avail/page-not-avail.component';

const routes: Routes = [
  { path :'products', component: ProductListComponent},
  { path :'category/:id', component: ProductListComponent},
  { path :'', redirectTo: '/products', pathMatch: 'full'},
  { path :'**', component: PageNotAvailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PageNotAvailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
