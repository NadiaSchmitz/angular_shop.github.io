import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private httpClient: HttpClient) { }

  getArticles() {
    return this.httpClient.get('https://dummyjson.com/products');
  }

}
