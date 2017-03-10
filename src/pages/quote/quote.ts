import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {QuoteService} from "../../services/quote.service";

/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewController:ViewController,private quoteService:QuoteService) {}

  person:string;
  quote:string;
  ionViewDidLoad(){
    this.person=this.navParams.get('person');
    this.quote=this.navParams.get('text');

  }

  doUnfavourite(){
    this.viewController.dismiss(true);

  }
  closeModal(){
    this.viewController.dismiss(false);
  }

}
