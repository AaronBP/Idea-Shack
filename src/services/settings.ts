export class SettingsService {
  private alternativeBackground = false;

  toggleAlternativeBackground(isAlt: boolean){
    this.alternativeBackground = isAlt;
    console.log(this.alternativeBackground);
  }

  getAlternativeBackground(){
    return this.alternativeBackground
  }
}
