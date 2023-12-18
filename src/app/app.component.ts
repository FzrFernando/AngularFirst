import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from '../saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListadoComponent } from './listado/listado.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SaludoComponent, ContadorComponent, ListadoComponent, CounterComponent, FormsModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFirst';
  inicial!: number;
  incremento!: number;
  valor!: number;

  sumar() {
    this.valor+=this.incremento;
  }

  restar() {
    this.valor-=this.incremento;
  }
}
