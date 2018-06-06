import { Component, OnInit, Input } from '@angular/core';
import { SearchQuery } from '../search-query';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  searchQuery: SearchQuery;
  resultUrl: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  @Input()
  set searchEvent(searchQuery: SearchQuery) {
    if (searchQuery != null) {
      this.searchQuery = searchQuery;
      this.search();
    }
  }

  search() {
    this.resultUrl = this.searchService.getQueryLink(this.searchQuery);
    $('#resultFrame').attr('src', this.resultUrl);
  }
}
