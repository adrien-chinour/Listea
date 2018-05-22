import { Injectable } from '@angular/core';

import { Article } from '../../models/article';
import Dexie from 'dexie';

@Injectable()
export class DataProvider {

  private db: Dexie;

  constructor() {
    this.db = new Dexie('liste_course');
    this.db.version(1).stores({
      articles: '++id, article'
    })
  }

  public getArticles(): Dexie.Promise<Article[]> {
    return this.db.table('articles').toArray();

  }

  public addArticle(article: Article){
    this.db.table('articles').add(article);
  }

  public checkArticle(article: Article) {
    let id = article.id;
    article.check = !article.check;
    this.db.table('articles').get(id).then(
      data => this.db.table('articles').update(id, {check: !(data.check)} )
    );
  }

  public deleteArticle(id: number){
    this.db.table('articles').delete(id);
    this.getArticles();
  }

}
