import { Component, OnInit, Input } from '@angular/core';
import { SearchQuery } from '../search-query';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private _searchQuery: SearchQuery;

  resultUrl: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  @Input()
  set searchEvent(searchQuery: SearchQuery) {
    if (searchQuery != null) {
      this._searchQuery = searchQuery;
      this.search(searchQuery);
    }
  }

  search(searchQuery: SearchQuery) {
    this.resultUrl = this.searchService.getQueryLink(searchQuery);
    $('#resultFrame').attr('src', this.resultUrl);
  }
}
