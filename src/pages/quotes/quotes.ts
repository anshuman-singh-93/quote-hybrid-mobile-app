import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {IQuote} from "../../data/quote.interface";
import {QuoteService} from "../../services/quote.service";

/*
  Generated class for the Quotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{

  quoteGroup:{category:string,quotes:IQuote[],icon:string};
  constructor(public navCtrl: NavController, public navParams: NavParams,private quoteService:QuoteService,private alertController:AlertController) {}

  ngOnInit(){

    this.quoteGroup=this.navParams.data;
  }

  addToFavourite(quote:IQuote){
    const alert=this.alertController.create({
      title:'Add to Favourite',
      subTitle:'Are you sure?',
      message:'Are you sure you want to add to favourite?',
      buttons:[{
        text:'Yes go ahead',
        handler:()=>{
          console.log('yes');
          this.quoteService.addQuoteToFavourite(quote);
          console.log(this.quoteService.getQuoteFromFavourite());
        }
      },{
        text:'No',
        handler:()=>{
          console.log('no');
        }
      }]
    });

    alert.present();

  }

  removeFromFavourite(quote:IQuote){
    this.quoteService.removeQuoteFromFavourite(quote);
  }

  isFavourite(quote:IQuote){
    return this.quoteService.isFavourite(quote);
  }

}
