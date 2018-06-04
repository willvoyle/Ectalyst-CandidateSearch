import { Injectable } from '@angular/core';
import { SearchQuery } from './search-query';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  getQueryLink(searchQuery: SearchQuery) {
    return 'https://www.google.co.uk/search?q=%28"Software+Developer"%2C+"London"%29&oq=%28"Software+Developer"%2C+"London"%29';
  }
}
