import {IQuote} from "../data/quote.interface";
export class QuoteService{
  private favouriteQuotes:IQuote[]=[];
  addQuoteToFavourite(quote:IQuote){
    this.favouriteQuotes.push(quote);
  }

  removeQuoteFromFavourite(quote:IQuote){
    var index=this.favouriteQuotes.findIndex((elem)=>{
      return elem.id==quote.id;
    });

    this.favouriteQuotes.splice(index,1);
  }

  getQuoteFromFavourite(){
    return this.favouriteQuotes.slice();
  }
  isFavourite(quote:IQuote){
    return this.favouriteQuotes.find((elem)=>{

      return elem.id==quote.id;
    });

  }
}
