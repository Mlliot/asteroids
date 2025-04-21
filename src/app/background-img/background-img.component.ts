import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-img',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './background-img.component.html',
  styleUrl: './background-img.component.css'
})
export class BackgroundImgComponent {
  apodData: any

  constructor( private apiService: ApiService) { }

  // Starts up api call
  ngOnInit(): void {
    console.log('hi')
    this.apiService.getToday().subscribe(data => {
      console.log(data)
      this.apodData = data;
    });
  }


}
