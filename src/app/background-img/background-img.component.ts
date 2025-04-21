import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-img',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './background-img.component.html',
  styleUrl: './background-img.component.css'
})
export class BackgroundImgComponent {
  key: string = '';
  service = inject(ApiService);
  apiResponse: any
  apodData: any

  myArr: string[] = new Array()

  constructor(private apiService: ApiService) { }

  // Starts up api call and subscribes to get data
  // ngOnInit(): void {
  //   console.log('hi')
  //   this.apiService.getToday().subscribe(data => {
  //     console.log(data)
  //     this.apodData = data;
  //   });
  // }

  ngOnInit(): void {
    this.key = this.service.getKey();
    console.log(this.key);
    this.service.getClosest().subscribe((test) => {
      // console.log(test);
      this.apiResponse = test
      console.log(JSON.stringify(this.apiResponse.near_earth_objects) + 'hello')
      this.myArr.push(this.apiResponse.near_earth_objects)
    });
    //console.log(this.service.getToday());
    // console.log(this.apiResponse)
  }

  getFiveResponses() {

    // for (const date in this.myArr) {
    //   if (this.myArr.hasOwnProperty(date)) {
    //     console.log(`Date: ${date}, Array:`, this.myArr[date]);
    //     // You can also iterate through the array elements if needed
    //     this.myArr[date].forEach((item: any, index: any) => {
    //       console.log(`  Item ${index}:`, item);
    //     });
    //   }
    // }
    let value = ''
    for (let key in this.myArr) {
      if (this.myArr.hasOwnProperty(key)) {
          value = this.myArr[key];
          // for(let i = 0; i < value.length; i++) {
          //   console.log( value[i] + ' yo')
          // }
          //console.log(key, value, 'hello');
      }
  }

    console.log(this.myArr[0])
  }


}
