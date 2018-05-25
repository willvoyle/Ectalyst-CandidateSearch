import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchQuery } from '../search-query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: SearchQuery;

  @Output() searchEvent = new EventEmitter<SearchQuery>();

  constructor() {}

  ngOnInit() {
    this.searchQuery = new SearchQuery();
    this.searchQuery.JobTitles.push('Web Developer');
  }

  search() {
    this.searchEvent.emit(this.searchQuery);
  }
}
