import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-controller2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller2.component.html',
  styleUrls: ['./controller2.component.scss']
})
export class Controller2Component {
  @Output() increase = new EventEmitter<number>();
  @Output() reset = new EventEmitter<number>();

  constructor(private commService: CommunicationService) {}
  
  increaseCounter() {
    this.increase.emit(1);
  }

  resetCounter() {
    this.reset.emit(0);
  }
}
