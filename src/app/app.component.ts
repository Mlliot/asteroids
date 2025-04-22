import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectsComponent } from "./objects/objects.component";
import { BackgroundImgComponent } from './background-img/background-img.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObjectsComponent, BackgroundImgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asteroids';

}