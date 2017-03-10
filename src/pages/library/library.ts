import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IQuote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{

  quotesPage=QuotesPage;
quoteCollection:{category:string,quotes:IQuote[],icon:string}[];

ngOnInit(){
  this.quoteCollection=quotes;
}
}
