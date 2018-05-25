import { Component, OnInit, Input } from '@angular/core';
import { SearchQuery } from '../search-query';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private _searchQuery: SearchQuery;

  constructor() {}

  ngOnInit() {}

  @Input()
  set searchEvent(searchQuery: SearchQuery) {
    if (searchQuery != null) {
      this._searchQuery = searchQuery;
      this.search(searchQuery);
    }
  }

  search(searchQuery: SearchQuery) {
  }
}
