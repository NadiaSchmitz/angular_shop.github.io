import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DummyProduct } from 'src/app/DummyProduct';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  article_description: string = '';
  /*products: Array<DummyProduct> = [];*/
  response: any;
  constructor(private http: HttpClient) {}
  getProductsFromService():void {
    this.http.get('https://dummyjson.com/products' + this.article_description);
    .subscribe((response)=>{
      this.response = this.response;
      console.log(this.response);
      
    })
    /*const productsUrl = 'https://dummyjson.com/products';*/
    /*const headerProd = new HttpHeaders().set('Accept', 'application/json');*/
    /*const params = new HttpParams();*/
    
    /*this.http.get<DummyProduct[]>(productsUrl, {params});*/
  }
}
