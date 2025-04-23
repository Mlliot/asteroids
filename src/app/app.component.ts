import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectsComponent } from "./objects/objects.component";
import { FooterComponent } from "./footer/footer.component";
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HeaderComponent } from "./header/header.component";
import { ApodComponent } from "./apod/apod.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObjectsComponent, FooterComponent, CommonModule, HeaderComponent, ApodComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'asteroids';
  imgUrl = 'https://apod.nasa.gov/apod/image/2502/AthenaEarth.png';

  private service = inject(ApiService);
  about = false;

  onClick(){
    if(this.about){
      this.about = false;
    } else {
      this.about = true;
    }
    console.log("Header clock, + " + this.about);
  }
}