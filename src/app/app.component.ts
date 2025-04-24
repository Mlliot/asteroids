import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ObjectsComponent } from "./objects/objects.component";
import { FooterComponent } from "./footer/footer.component";
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HeaderComponent } from "./header/header.component";
import { ApodComponent } from "./apod/apod.component";
import { MatIconModule } from '@angular/material/icon';
import { FavoritesComponent } from "./favorites/favorites.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ObjectsComponent, FooterComponent, CommonModule, HeaderComponent, ApodComponent, MatIconModule, FavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'asteroids';
  imgUrl = 'https://apod.nasa.gov/apod/image/2502/AthenaEarth.png';
  private service = inject(ApiService);
  about = false;
  showElement: boolean = false
  isHome = true;
  currentUrl: string = ''

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    //Gets Current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.urlAfterRedirects;
      console.log(this.currentUrl);
      this.isHome = this.currentUrl === '/object' ? true : false
    });
  }


onClick() {
  if (this.about) {
    this.about = false;
  } else {
    this.about = true;
  }
  console.log("Header clock, + " + this.about);
  console.log(this.route.snapshot)
}
}