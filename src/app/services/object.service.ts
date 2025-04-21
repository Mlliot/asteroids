import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectService implements OnInit{

  private objects = new Observable();
  private service = inject(ApiService);
  key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setObjects(){
    
  }

  getObjects(){
    this.objects = this.service.getToday();
    return this.objects;
  }
}

//this class caches todays near earch objects.