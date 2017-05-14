import { IdeaInterface } from '../data/idea.interface';

export class IdeasService {
  private favouriteIdeas: IdeaInterface[] = [];

  addIdeaToFavourites(idea: IdeaInterface) {
    this.favouriteIdeas.push(idea);
    console.log(this.favouriteIdeas);
  }

  removeIdeaFromFavourites(idea: IdeaInterface){
    const position = this.favouriteIdeas.findIndex((ideaEl: IdeaInterface) => {
      return ideaEl.id == idea.id;
    });
    this.favouriteIdeas.splice(position, 1);
  }

  getFavouriteIdeas() {
    return this.favouriteIdeas.slice()
  }

  isIdeaFavourite(idea: IdeaInterface){
    return this.favouriteIdeas.find((ideaEl: IdeaInterface) => {
      return ideaEl.id == idea.id;
    });
  }
}
