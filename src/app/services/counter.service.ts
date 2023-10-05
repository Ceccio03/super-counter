import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = new BehaviorSubject<number>(0);
  pippo = 0;

  increaseCount() {
    const actualCount = this.count;
  }

  resetCount() {

  }
  constructor() { }
}
