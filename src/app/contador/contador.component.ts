import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  title: string = 'Mi contador';
  counter: number = 0;
  base: number = 2;

  aggregate(){
    this.counter+=this.base;
  }

  less(){
    this.counter-=this.base;
  }
}
