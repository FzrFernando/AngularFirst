import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() inicial!: number;
  @Input() incremento!: number; 

  @Output() sumar = new EventEmitter<number>();
  @Output() restar = new EventEmitter<number>();

  aggregate() {
    this.inicial+=this.incremento;
  }

  less() {
    this.inicial-=this.incremento;
  }
}
