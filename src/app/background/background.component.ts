import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent implements OnInit{

  key: string = '';
  service = inject(ApiService);
  // today;

  ngOnInit(): void {
    this.key = this.service.getKey();
    console.log(this.key);
    this.service.getToday().subscribe((test) => {
      console.log(test);
    });
    console.log(this.service.getToday());
  }


}
