import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import {IQuote} from "../../data/quote.interface";
import {QuoteService} from "../../services/quote.service";
import {QuotePage} from "../quote/quote";
import {SettingService} from "../../services/settings.service";

/*
  Generated class for the Favourites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {

  quotes:IQuote[];
  constructor(private quoteService:QuoteService,private modalController:ModalController,private settingService:SettingService) {}

ionViewWillEnter(){
    this.quotes=this.quoteService.getQuoteFromFavourite();
}
  onViewQuote(quote:IQuote){
    const modal=this.modalController.create(QuotePage,quote);
    modal.present();

    modal.onDidDismiss((remove)=>{

      if(remove){
        this.removeFromFavourite(quote);
    }
    })

  }



  removeFromFavourite(quote:IQuote){
  this.quoteService.removeQuoteFromFavourite(quote);
  this.quotes=this.quoteService.getQuoteFromFavourite();
  }

  getBackground(){
  return this.settingService.isAltBackground()?'altBackground':'quoteBackground';
  }
}
