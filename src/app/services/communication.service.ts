import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  increase = new Subject<number>();
  reset = new Subject<number>();
  
  constructor() { }
}
