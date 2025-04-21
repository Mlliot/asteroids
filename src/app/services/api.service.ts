import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  private key: string = "Zfd1tZZSFwIBgRAKOdhafBz8xcW8WuRJ8xDHmlNR";
  //private today: string = "https://api.nasa.gov/neo/rest/v1/feed/today";
  private today: string =  'https://api.nasa.gov/planetary/apod';

  constructor() { }

  getKey(){
    return this.key;
  }

  getToday(){
    const h = {'api_key': this.key};
    return this.http.get(this.today, { params: h, context: withCache()});
  }
  
}
