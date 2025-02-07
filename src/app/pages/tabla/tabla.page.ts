import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class TablaPage {
  form: FormGroup;
  tabla: string[] = [];

  constructor(private fb: FormBuilder) {
    // Se define el grupo de formulario con un control 'numero'
    this.form = this.fb.group({
      numero: [null, Validators.required]
    });
  }

  generarTabla() {
    // Reinicia el arreglo antes de generar la tabla
    this.tabla = [];
    const num = Number(this.form.get('numero')?.value);
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${num} x ${i} = ${num * i}`);
    }
  }
}
