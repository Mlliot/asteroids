import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./background/background.component";
import { ObjectsComponent } from "./objects/objects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundComponent, ObjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asteroids';
}
