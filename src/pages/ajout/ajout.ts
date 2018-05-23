import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { DataProvider } from "../../providers/data/data";
import {Article} from "../../models/article";

@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {

  article: Article = { name: '', categorie: '', check: false};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private dataProvider: DataProvider) {
  }

  addArticle() {
    this.dataProvider.addArticle(this.article);
    this.article = { name: '', categorie: '', check: false};
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Article ajouté à la liste avec succès.',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok.',
      dismissOnPageChange: true,
      cssClass: 'bg-secondary'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
