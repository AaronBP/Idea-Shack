import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { IdeaInterface } from '../../data/idea.interface';
import { Idea } from '../idea/idea';
import { IdeasService } from '../../services/ideas';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class Favourites {
  ideas: IdeaInterface[]

  constructor(private ideasService: IdeasService,
              private settingsService: SettingsService,
              private alertCtrl: AlertController){}

  ionViewWillEnter(){
    this.ideas = this.ideasService.getFavouriteIdeas();
  }

  onRemoveFromFavourites(idea: IdeaInterface){
    const alert = this.alertCtrl.create({
      title: 'Add idea',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to unfavourite this idea?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.ideasService.removeIdeaFromFavourites(idea);
            this.ideas = this.ideasService.getFavouriteIdeas();
          }
        },
        {
          text: 'Nope, go back',
          role: 'cancel'
        }
      ]
    });
    alert.present();

  }

  getBackground (){
    return this.settingsService.getAlternativeBackground() ? 'altIdeaBackground' : 'ideaBackground'
  }
}
