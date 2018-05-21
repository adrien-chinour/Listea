import { Component } from '@angular/core';

import{ AccueilPage } from '../accueil/accueil';
import{ AjoutPage } from '../ajout/ajout';
import{ InformationPage } from '../information/information';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = AjoutPage;
  tab3Root = InformationPage;

  constructor() {

  }
}
