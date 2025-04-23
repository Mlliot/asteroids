import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectsComponent } from "./objects/objects.component";
import { FooterComponent } from "./footer/footer.component";
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObjectsComponent, FooterComponent, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'asteroids';
  imgUrl = "";

  private service = inject(ApiService);

  ngOnInit(): void {
    this.service.todayPic.subscribe( (obj: any) => {
      this.imgUrl = obj.url;
      console.log(this.imgUrl);
    });
  }
}