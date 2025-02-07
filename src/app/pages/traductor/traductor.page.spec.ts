import { Component } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage {
  // Se inicializa en 0 para evitar errores de inicialización.
  numero: number = 0;
  texto: string = '';

  traducir() {
    if (this.numero < 1 || this.numero > 1000) {
      this.texto = 'Número fuera de rango (debe estar entre 1 y 1000)';
    } else {
      this.texto = this.numeroALetras(this.numero);
    }
  }

  numeroALetras(num: number): string {
    // Caso especial para 1000
    if (num === 1000) return 'mil';
    // Caso especial para 100
    if (num === 100) return 'cien';

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    let resultado = '';

    // Procesar centenas (si el número es mayor a 99)
    if (num > 99) {
      const centena = Math.floor(num / 100);
      resultado += centenas[centena] + ' ';
      num = num % 100;
    }

    // Procesar decenas y unidades
    if (num < 10) {
      resultado += unidades[num];
    } else if (num >= 10 && num < 20) {
      resultado += (num === 10) ? 'diez' : especiales[num - 10];
    } else {
      const decena = Math.floor(num / 10);
      const unidad = num % 10;
      if (decena === 2 && unidad !== 0) {
        // Para números del 21 al 29: veintiuno, veintidós, etc.
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
