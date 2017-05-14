import { Component } from '@angular/core';

import { Favourites } from '../favourites/favourites';
import { Library } from '../library/library';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  favouritesPage = Favourites;
  libraryPage = Library;
}
