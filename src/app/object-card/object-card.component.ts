import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-object-card',
  imports: [MatIconModule],
  template: `
      <div class="objectCard">
        <div>
            <mat-icon>grade</mat-icon>
        </div>
        <div class="objCardHolder">
          <div class="objCard name"> 
            <!-- <label> Name: </label> -->
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
      </div>

  `,
  styleUrl: './object-card.component.css'
})
export class ObjectCardComponent {

}
