import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./background/background.component";
import { ObjectsComponent } from "./objects/objects.component";
import { BackgroundImgComponent } from './background-img/background-img.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asteroids';
}
