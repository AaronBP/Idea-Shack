import { Component, OnInit } from '@angular/core';

import { Ideas } from '../ideas/ideas'
import { IdeaInterface } from '../../data/idea.interface';
import ideas from '../../data/ideas';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit{
  ideaCollection: {category: string, ideas: IdeaInterface[], icon: string}[];
  ideasPage = Ideas
  ngOnInit(){
    this.ideaCollection = ideas;
  }
}
