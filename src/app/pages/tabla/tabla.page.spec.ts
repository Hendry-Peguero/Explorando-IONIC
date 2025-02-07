import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage {
  // Inicialización para evitar errores de asignación.
  numero: number = 0;
  tabla: string[] = [];

  generarTabla() {
    this.tabla = [];
    const num = Number(this.numero);
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${num} x ${i} = ${num * i}`);
    }
  }
}
