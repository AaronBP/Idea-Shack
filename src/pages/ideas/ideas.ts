import { Component } from '@angular/core';

import { NavParams, AlertController } from 'ionic-angular';
import { IdeaInterface } from '../../data/idea.interface';
import { IdeasService } from "../../services/ideas";

@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})

export class Ideas {
  ideaGroup: {category: string, ideas: IdeaInterface[], icon: string}

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private ideasService: IdeasService){

    this.ideaGroup = this.navParams.data;

  }

  onAddToFavourite(selectedidea: IdeaInterface){
    this.ideasService.addIdeaToFavourites(selectedidea);
  }

  onRemoveFromFavourites(idea: IdeaInterface){
    this.ideasService.removeIdeaFromFavourites(idea);
  }

  isFavourite(idea: IdeaInterface){
    return this.ideasService.isIdeaFavourite(idea);
  }
}
