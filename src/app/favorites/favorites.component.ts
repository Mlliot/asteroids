import { Component, inject, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Neo } from '../services/neo';
import { ObjectCardComponent } from "../object-card/object-card.component";

@Component({
  selector: 'app-favorites',
  imports: [ObjectCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe( list => {
      this.favorites = list;
    });
  }

  favoritesService = inject(FavoritesService);
  favorites: Neo[]= [];
}
