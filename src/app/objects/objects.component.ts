import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
// import { ObjectService } from '../services/object.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule, JsonPipe } from '@angular/common';
import { ObjectCardComponent } from "../object-card/object-card.component";

export interface Info {
  missDistance: string;
  minDiameter: number;
  maxDiameter: number;
}

@Component({
  selector: 'app-objects',
  imports: [JsonPipe, ObjectCardComponent, CommonModule],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent implements OnInit {

  service = inject(ApiService);
  objData: any;
  neoData: any;
  private day = this.service.year + "-" + "0" + this.service.month + "-" + this.service.day;

  listOfObjects: Signal<any> = signal(0);

  defaultUrl = signal('')
  defaultVelocity = signal(0)
  defaultMagnitude = signal(0)
  defaultHazard = signal(false)
  defaultOrbiting = signal('')
  currInfo = signal<Info>({ missDistance: '', minDiameter: 0, maxDiameter: 0 });
  itemSelected = false


  // today;

  constructor() {
    // this.listOfObjects = toSignal(this.objects);
  }

  ngOnInit(): void {
    this.service.getNeoToday().subscribe(obj => {
      this.objData = obj;
      this.neoData = this.objData.near_earth_objects[this.day];
      console.log(this.neoData);
    });
    // console.log(this.day);
  }

  setCurr(curr: any) {
    this.itemSelected = true
    this.defaultUrl.set(curr.nasa_jpl_url)
    this.defaultVelocity.set(curr.close_approach_data[0].relative_velocity.miles_per_hour)
    this.defaultMagnitude.set(curr.absolute_magnitude_h)
    this.defaultOrbiting.set(curr.close_approach_data[0].orbiting_body)
    this.defaultHazard.set(curr.is_potentially_hazardous_asteroid)
    this.currInfo.set({
      missDistance: curr.close_approach_data[0].miss_distance.miles,
      minDiameter: curr.estimated_diameter.miles.estimated_diameter_min,
      maxDiameter: curr.estimated_diameter.miles.estimated_diameter_max
    })


  }

  //Current way of naviagting out, not sure if right but for now this is what we got
  navigateUrl(url:any) {

    window.location.href = url;

  }
}
