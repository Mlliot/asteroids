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
  
  objectService = inject(ObjectService);
  objects: any;

  listOfObjects: Signal<any> = signal(0);
  
  // today;

  constructor() {
    // this.listOfObjects = toSignal(this.objects);
  }

  ngOnInit(): void {
    this.objectService.getObjects().subscribe( obj => {
      this.objects = obj;
      console.log(this.objects);
    });
  }

}
