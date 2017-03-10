export  class SettingService{
  private altBackground=false;

  setAltBackground(altBg:boolean){
    this.altBackground=altBg;
  }

  isAltBackground(){
    return this.altBackground;
  }
}
