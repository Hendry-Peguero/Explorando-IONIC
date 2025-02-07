import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class SumadoraPage {
  // Declaramos la propiedad "form" (se recomienda declarar explícitamente como public)
  public form: FormGroup;
  public resultado: number | null = null;

  constructor(private fb: FormBuilder) {
    // Inicializamos el FormGroup con dos controles
    this.form = this.fb.group({
      numero1: [null, Validators.required],
      numero2: [null, Validators.required]
    });
  }

  sumar() {
    const n1 = this.form.get('numero1')?.value;
    const n2 = this.form.get('numero2')?.value;
    this.resultado = Number(n1) + Number(n2);
  }
}
