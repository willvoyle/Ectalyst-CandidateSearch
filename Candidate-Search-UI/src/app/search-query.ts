export class SearchQuery {
  constructor() {
    this.JobTitles = new Array<string>();
    this.Locations = new Array<string>();
    this.Technologies = new Array<string>();
  }

  public JobTitles: string[];
  public Technologies: string[];
  public Locations: string[];
}
