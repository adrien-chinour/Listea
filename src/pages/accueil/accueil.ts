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

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
  }

  ionViewWillEnter() {
    this.articles = this.dataProvider.getArticles().sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  deleteArticle(article: Article) {
    this.dataProvider.deleteArticle(article);
  }

  checkArticle(article: Article) {
    this.dataProvider.checkArticle(article);
  }

}
