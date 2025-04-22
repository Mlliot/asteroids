import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ObjectService } from '../services/object.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-objects',
  imports: [JsonPipe],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent implements OnInit{
  
  service = inject(ApiService);
  objData: any;
  private day = this.service.year + "-" + "0" + this.service.month + "-" + this.service.day;

  listOfObjects: Signal<any> = signal(0);
  
  // today;

  constructor() {
    // this.listOfObjects = toSignal(this.objects);
  }

  ngOnInit(): void {
    this.service.getNeoToday().subscribe( obj => {
      this.objData = obj;
      console.log(this.objData.near_earth_objects[this.day][0]);
    });
    // console.log(this.day);
  }
}
