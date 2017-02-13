import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpModule, Http, Response} from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit, OnChanges {

  link = 'http://localhost:8080/api/nicknames';
  http: Http;
  text;
  response;

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
     console.log("Search " + searchTerm);
    if(searchTerm == null) {
      console.log("Es null");
    }

    let apiLink = this.link + "?name=" + searchTerm;
    this.http.request(apiLink) .subscribe((res: Response) => {
          this.response = res.json();
    });
  }

  onSubmit(): void {
    if (this.text !== '') {
      this.performSearch(this.text);
    }
  }

  ngOnChanges(): void {
    if (this.text !== '') {
      this.performSearch(this.text);
    }
  }
  ngOnInit(): void {
  }

}
