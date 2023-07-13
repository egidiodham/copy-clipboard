import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private clipboard: Clipboard) {}

  title = 'Ejemplo de copia de copiar un texto en el portapapeles';
  textoACopiar = ''


  copiar() {
    this.clipboard.copy(this.textoACopiar || 'No hay texto');
  }
}
