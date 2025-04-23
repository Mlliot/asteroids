import { Component, HostListener, AfterViewInit, inject, OnInit, Signal, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
// import { ObjectService } from '../services/object.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule, JsonPipe } from '@angular/common';
import { ObjectCardComponent } from "../object-card/object-card.component";
import { ApodComponent } from "../apod/apod.component";

export interface Info {
  missDistance: string;
  minDiameter: number;
  maxDiameter: number;
}

export interface Meters {
  minMeters: number,
  maxMeters: number
}

@Component({
  selector: 'app-objects',
  imports: [JsonPipe, ObjectCardComponent, CommonModule, ApodComponent],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent implements OnInit, AfterViewInit {

  service = inject(ApiService);
  objData: any;
  neoData: any;
  private day = this.service.year + "-" + "0" + this.service.month + "-" + this.service.day;

  listOfObjects: Signal<any> = signal(0);

  viewportWidth = window.innerWidth // need this to start formula of conversion unit
  viewportHeight = window.innerHeight;

  mediaQuery = window.matchMedia('(max-width: 800px)');


  defaultUrl = signal('')
  defaultVelocity = signal(0)
  defaultMagnitude = signal(0)
  defaultHazard = signal(false)
  defaultOrbiting = signal('')
  currInfo = signal<Info>({ missDistance: '', minDiameter: 0, maxDiameter: 0 });
  currMeters = signal<Meters>({ minMeters: 0, maxMeters: 0 })
  itemSelected = false
  scale = 1

  zoomStyle = {}
  currName = signal('');
  imgUrl: any;


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


  ngAfterViewInit(): void {
    // this.changeSize();
  }



  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // this.viewportWidth = window.innerWidth
    // this.viewportHeight = window.innerHeight
    // this.changeSize();
  }


  setCurr(curr: any) {
    this.itemSelected = true
    this.currName.set(curr.name);
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

    this.currMeters.set({
      minMeters: curr.estimated_diameter.meters.estimated_diameter_min,
      maxMeters: curr.estimated_diameter.meters.estimated_diameter_max
    })


  }

  //Current way of naviagting out, not sure if right but for now this is what we got
  // navigateUrl(url: any) {

  //   window.location.href = url;

  // }


  getCircleSize(meters: Meters) {

    // if (this.mediaQuery.matches) {
    //   const asteroid = document.querySelector('.circle') as HTMLElement;

    //   const oldWidth = parseFloat(getComputedStyle(asteroid).width);
    //   const oldHeight = parseFloat(getComputedStyle(asteroid).height);

    //   const newW = oldWidth - 60
    //   const newH = oldHeight - 60
    //   console.log('hello ' + newW + ' ' + newH)
    //   return {
    //     width:  `${newW}px`,
    //     height: `${newH}px`
    //   };
    // }
    // else {

      // Formula to convert meters to px
      const min = meters.minMeters * 3779.527559;
      const max = meters.minMeters * 3779.527559;

      // Have to proportion circle to fit content divide by 100k
      const median = ((min + max) / 2) / 100000
      return {
        width: `${median}px`,
        height: `${median}px`
      };
    }



  onZoom(event: WheelEvent) {
    event.preventDefault();
    const zoomFactor = 0.1;
    if (event.deltaY < 0) {
      this.scale += zoomFactor;
    } else {
      this.scale -= zoomFactor;
    }
    this.scale = Math.max(0.1, Math.min(this.scale, 3)); // Limit the zoom scale
    const zoomContent = document.querySelector('.zoom-content') as HTMLElement;
    // const circle = document.querySelector('.circle') as HTMLElement;
    // console.log(circle)
    zoomContent.style.transform = `scale(${this.scale})`;


    // Calculate the new transform-origin based on the mouse position
    // const rect = (event.target as HTMLElement).getBoundingClientRect();
    // const offsetX = event.clientX - rect.left;
    // const offsetY = event.clientY - rect.top;

    // this.zoomStyle = {
    //   transform: `scale(${this.scale})`,
    //   transformOrigin: `${offsetX}px ${offsetY}px`
    // };

    //  const zoomContent = document.querySelector('.zoom-content') as HTMLElement;
    //  zoomContent.style.transform = `scale(${this.scale})`
    //  zoomContent.style.transformOrigin = `${offsetX}px ${offsetY}px`

  }

  // Changing Earth and asteroid sizes, when screen resize, Could use media queries though
  //   changeSize() {
  //     const asteroid = document.querySelector('.circle') as HTMLElement;
  //     const earth = document.querySelector('.earthCircle') as HTMLElement;
  //     const zoomContainer = document.querySelector('.zoom-container') as HTMLElement;

  //     //For width conversion
  //     // let vw = parseInt(zoomContainer.style.width); // would of work if width was inline
  //     // let asteroidCurrPX = parseInt(asteroid.style.width);
  //     // let earthCurrPX = parseInt(earth.style.width)


  //     let vw = parseInt(getComputedStyle(zoomContainer).width);
  //     let asteroidCurrPX = parseFloat(getComputedStyle(asteroid).width) / vw * 100;
  //     let earthCurrPX = parseFloat(getComputedStyle(earth).width) /vw * 100

  //     let px = (vw / 100) * this.viewportWidth; // converts vw to px
  //     let asteroidPercentage = (asteroidCurrPX / px) * 100 // converts px to %. currPX is the actual px of element, px is the base px size of parent which is needed for formula
  //     let earthPercentage = (earthCurrPX / px) * 100
  //     asteroid.style.width = `${asteroidPercentage}`;

  //     earth.style.width = `${earthPercentage}%`
  //     console.log(earthPercentage + 'hello')

  //     //For height conversion
  //     let vh = parseInt(zoomContainer.style.height);
  //     let asteroidCurrPXH = parseInt(asteroid.style.height);
  //     let earthCurrPXH = parseInt(earth.style.height)
  //     let pxH = (vh / 100) * this.viewportHeight; // converts vw to px
  //     let asteroidPercentageH = (asteroidCurrPXH / pxH) * 100 // converts px to %. currPX is the actual px of element, px is the base px size of parent which is needed for formula
  //     let earthPercentageH = (earthCurrPXH / pxH) * 100
  //     asteroid.style.height = `${asteroidPercentageH}`;
  //     earth.style.height = `${earthPercentageH}`

  //   }


}
