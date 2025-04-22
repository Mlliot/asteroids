import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
// import { ObjectService } from '../services/object.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { ObjectCardComponent } from "../object-card/object-card.component";

@Component({
  selector: 'app-objects',
  imports: [JsonPipe, ObjectCardComponent],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent implements OnInit{
  
  service = inject(ApiService);
  objData: any;
  neoData: any;
  private day = this.service.year + "-" + "0" + this.service.month + "-" + this.service.day;

  listOfObjects: Signal<any> = signal(0);
  
  // today;

  constructor() {
    // this.listOfObjects = toSignal(this.objects);
  }

  ngOnInit(): void {
    this.service.getNeoToday().subscribe( obj => {
      this.objData = obj;
      this.neoData = this.objData.near_earth_objects[this.day];
      console.log(this.neoData);
    });
    // console.log(this.day);
  }
}
