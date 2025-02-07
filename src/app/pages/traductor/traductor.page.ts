import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule]
})
export class TraductorPage {
  form: FormGroup;
  texto: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      numero: [null, [Validators.required, Validators.min(1), Validators.max(1000)]]
    });
  }

  traducir() {
    const num = this.form.get('numero')?.value;
    if (num < 1 || num > 1000) {
      this.texto = 'Número fuera de rango (debe estar entre 1 y 1000)';
    } else {
      this.texto = this.numeroALetras(num);
    }
  }

  numeroALetras(num: number): string {
    if (num === 1000) return 'mil';
    if (num === 100) return 'cien';

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    let resultado = '';

    if (num > 99) {
      const centena = Math.floor(num / 100);
      resultado += centenas[centena] + ' ';
      num = num % 100;
    }

    if (num < 10) {
      resultado += unidades[num];
    } else if (num >= 10 && num < 20) {
      resultado += num === 10 ? 'diez' : especiales[num - 10];
    } else {
      const decena = Math.floor(num / 10);
      const unidad = num % 10;
      if (decena === 2 && unidad !== 0) {
        const veinti = ['', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
        resultado += veinti[unidad];
      } else {
        resultado += decenas[decena];
        if (unidad > 0) {
          resultado += ' y ' + unidades[unidad];
        }
      }
    }
    return resultado.trim();
  }
}
