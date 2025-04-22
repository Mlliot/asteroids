import { Component } from '@angular/core';

@Component({
  selector: 'app-object-card',
  imports: [],
  template: `
      <div class="objectCard">
        <!-- <label>Name:</label> -->
        <div class="objCard"> 
          <label> Name: </label>
          <ng-content select="[name]"></ng-content> 
        </div>
        <div class="objCard"> 
        <label> ID: </label>
          <ng-content select="[id]"> </ng-content> 
        </div>
        <div class="objCard"> 
        <label> Hazard: </label>
          <ng-content select="[hazard]"> </ng-content> 
        </div>
      </div>

  `,
  styleUrl: './object-card.component.css'
})
export class ObjectCardComponent {

}
