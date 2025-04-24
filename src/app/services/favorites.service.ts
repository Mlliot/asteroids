import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Neo } from './neo';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private subject: BehaviorSubject<Neo[]> = new BehaviorSubject([new Neo(0, "name", false)]);

  constructor() { }

  getFavorites(){
    return this.subject;
  }

  addNeo(obj: any){
    const curVal = this.subject.value;
    const newVal = [...curVal, obj];
    this.subject.next(newVal);
  }

  removeNeo(id: number){
    const curVal = this.subject.value;
    const newVal = curVal.filter(obj => obj.id !== id);
    this.subject.next(newVal);
  }

  initNeo(list: Neo[]){
    this.subject.next(list);
  }

}
