import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-pago',
  templateUrl: './nuevo-pago.page.html',
  styleUrls: ['./nuevo-pago.page.scss'],
})
export class NuevoPagoPage implements OnInit {
  formGroupNuevoPago: FormGroup;
  fechaPago :String
  errorMensaje: string = 'Campo obligatorio'
  tempImages :string ='../../../assets/icon/camara.jpg'
  constructor(public fb: FormBuilder,) { }

  ngOnInit() {
    this.setValuesFormBuilder()
  }

  public formGroupNuevoPagoSubmit(event) {}

  private setValuesFormBuilder() {
    this.formGroupNuevoPago = this.fb.group({
      FechaPago: ['', Validators.compose([Validators.required])],
      nroOperacion: [''],
      Monto: ['', Validators.compose([Validators.required])],


    });
  }

  customPickerOptionsProceso = {
    buttons: [{
      text: 'OK',
      handler: (event) => {
        this.fechaPago = event.year.text + '-' + event.month.text + '-' + event.day.text
      }
    }]
  }
}
