import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from "../../providers/data/data";
import {Article} from "../../models/article";

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  articles: Article[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewWillEnter() {
    this.getArticles();
  }

  deleteArticle(id: number) {
    this.dataProvider.deleteArticle(id);
    this.getArticles();
  }

  checkArticle(article: Article) {
    this.dataProvider.checkArticle(article);
  }

  getArticles() {
    this.dataProvider.getArticles().then(
      data => this.articles = data
    );
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
