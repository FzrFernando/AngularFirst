import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  userName! : string;
  password! : string;

  @Output() formulario = new EventEmitter<void>;

  envioFormulario() {

  }
}
