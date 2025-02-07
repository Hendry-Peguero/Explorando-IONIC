import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
  standalone: true, // Indica que el componente es standalone
  imports: [IonicModule, CommonModule] // Importa IonicModule para los componentes de Ionic y CommonModule para directivas comunes
})
export class ExperienciaPage {
  // Puedes agregar lógica adicional si lo requieres.
}
