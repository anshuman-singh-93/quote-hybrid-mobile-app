import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {FavouritesPage} from "../pages/favourites/favourites";
import {LibraryPage} from "../pages/library/library";
import {QuotesPage} from "../pages/quotes/quotes";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuoteService} from "../services/quote.service";
import {QuotePage} from "../pages/quote/quote";
import {SettingService} from "../services/settings.service";

@NgModule({
  declarations: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},QuoteService,SettingService]
})
export class AppModule {}
