import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-idea',
  templateUrl: 'idea.html',
})
export class Idea {
  person: string;
  text: string

  constructor(private viewCtrl: ViewController, private navParams: NavParams){}

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }
}
