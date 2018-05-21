import { Injectable } from '@angular/core';

import { Article } from '../../models/article';

@Injectable()
export class DataProvider {

  private articles: Article[] = [
    {name: 'Pommes', categorie: '#Tarte', check: true},
    {name: 'bières', categorie: '#Apéro', check: false}
  ];

  constructor() {
  }

  getArticles() {
    return this.articles;
  }

  addArticle(article: Article){
    this.articles = [...this.articles, article];
  }

  checkArticle(article: Article) {
    for (let i in this.articles) {
      if (this.articles[i].name == article.name) {
        this.articles[i].check = !this.articles[i].check;
        break;
      }
    }
  }

  deleteArticle(article: Article){
    let index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
  }

}
