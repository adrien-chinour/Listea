import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from "../../providers/data/data";
import {Article} from "../../models/article";

@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {

  article: Article = { name: '', categorie: '', check: false};

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
  }

  addArticle() {
    this.dataProvider.addArticle(this.article);
    this.article = { name: '', categorie: '', check: false};
  }
}
