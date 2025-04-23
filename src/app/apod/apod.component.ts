import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apod',
  imports: [CommonModule],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css'
})
export class ApodComponent implements OnInit {
  service = inject(ApiService);
  imgUrl: any;

  ngOnInit(): void {
    this.service.todayPic.subscribe( (obj: any) => {
      this.imgUrl = obj.url;
      console.log(this.imgUrl);})
  }

}
