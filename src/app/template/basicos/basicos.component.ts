import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto'].invalid && this.miFormulario?.controls['producto'].touched;
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario);
  }

}
