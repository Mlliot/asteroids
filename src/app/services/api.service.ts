import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);
  now: Date = new Date()
  day: number = this.now.getDate()
  month: number = this.now.getMonth() + 1
  year: number = this.now.getFullYear()

  // year = this.now.getFullYear().toString().slice(-2);

  // moon : https://apod.nasa.gov/apod/image/2504/TerminatorMoon_Addis_960.jpg
  // Letf off trying to pslice the eyar to 21 or 22 since that is what is needed for the API call
  private key: string = "Zfd1tZZSFwIBgRAKOdhafBz8xcW8WuRJ8xDHmlNR";
  // private key: string = "UCAtl1BChgein4S2NlMDmmzFR3Vc1yU02U02m7F4";
  private neoToday: string = "https://api.nasa.gov/neo/rest/v1/feed/today";
  private today: string =  'https://api.nasa.gov/planetary/apod';
  // private close: string = 'https://www.neowsapp.com/rest/v1/feed?start_date=2025-04-21'
  private close: string = `https://www.neowsapp.com/rest/v1/feed?start_date=${this.year}-${this.month}-${this.day}`

  objData: any;
  neoData: any;
  todayPic: any;

  constructor() { 
    this.todayPic = this.getToday();
  }

  getKey() {
    return this.key;
  }

  getToday() {
    const h = { 'api_key': this.key };
    return this.http.get(this.today, { params: h, context: withCache() });
  }

  getNeoToday(){
    const h = {'api_key': this.key};
    return this.http.get(this.neoToday, { params: h, context: withCache()});
  }

  getClosest() {
    console.log('In closet, this is year ' + this.year)
    return this.http.get(this.close, { context: withCache()});
  }

}


