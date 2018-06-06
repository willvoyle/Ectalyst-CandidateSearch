import { Injectable } from '@angular/core';
import { SearchQuery } from './search-query';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  getQueryLink(searchQuery: SearchQuery) {
    // tslint:disable-next-line:max-line-length
    return 'http://ectalyst-cse-linkedin.azurewebsites.net/linkedin-search.html?q=(%22Computer+Science%22)+%2B+(%22London%22)+%2B+(%22Oxford%22)+%2B+(%22Cambridge%22)';
  }
}
