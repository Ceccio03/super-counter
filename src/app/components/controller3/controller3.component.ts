import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controller3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller3.component.html',
  styleUrls: ['./controller3.component.scss']
})
export class Controller3Component {
  @Output() increase = new EventEmitter<number>();
  @Output() reset = new EventEmitter<number>();

  increaseCounter() {
    this.increase.emit(1);
  }

  resetCounter() {
    this.reset.emit(0);
  }
}
