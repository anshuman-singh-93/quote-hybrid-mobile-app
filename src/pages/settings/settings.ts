import { Component } from '@angular/core';
import {NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingService} from "../../services/settings.service";

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private settingService:SettingService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle:Toggle){
    this.settingService.setAltBackground(toggle.checked);
  }
  checkedBackground(){
    return this.settingService.isAltBackground();
  }
}
