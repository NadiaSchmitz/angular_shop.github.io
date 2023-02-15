import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ArticleServiceService } from 'src/app/article-service.service';
import { DummyProduct } from 'src/app/DummyProduct';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  /*products: Array<DummyProduct> = [];*/
  
  constructor(public articleServiceService: ArticleServiceService) {}

  articlesList: any;
  ngOnInit(): void {
    this.articlesList = this.articleServiceService.getArticles().subscribe(data => {
      this.articlesList = data;
    });
  }
  /*getProductsFromService():void {
    this.http.get(this.productsUrl).toPromise().then(data => {

    });
    
    const productsUrl = 'https://dummyjson.com/products';
    const headerProd = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams();
    
    this.http.get<DummyProduct[]>(productsUrl, {headerProd, params});
  }*/
}