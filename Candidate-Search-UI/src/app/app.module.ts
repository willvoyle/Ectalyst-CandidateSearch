import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
