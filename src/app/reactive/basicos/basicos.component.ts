import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  /* miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 3080'),
    precio: new FormControl(1500),
    existencias: new FormControl(15),
  }) */

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    /* this.miFormulario.setValue({
      nombre: 'RTX 3080',
      precio: 1500,
      existencias: 15,
    }); */
    this.miFormulario.reset({
      nombre: 'RTX 3080',
      precio: 1500,
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      // activar todos los errores del formulario
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
