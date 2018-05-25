import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SearchQuery } from './search-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Ectalyst Search';

  searchQuery: SearchQuery;

  receiveSearchEvent($event) {
    this.searchQuery = $event;
  }
}
