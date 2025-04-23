import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  image = signal(false);
  constructor() { }
}
