import { Component, output, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-background-img',
  imports: [HttpClientModule, CommonModule, FooterComponent],
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

  imageSrc: any;

  imageOut = output();
  // Starts up api call and subscribes to get data
  // ngOnInit(): void {
  //   console.log('hi')
  //   this.apiService.getToday().subscribe(data => {
  //     console.log(data)
  //     this.apodData = data;
  //   });
  // }

  ngOnInit(): void {
    console.log('hi')
    this.apiService.getToday().subscribe(data => {
      console.log(data)
      this.apodData = data;
      this.imageSrc = this.apodData.url;
    });
  }

  getFiveResponses() {
    throw new Error('Method not implemented.');
    }
}
