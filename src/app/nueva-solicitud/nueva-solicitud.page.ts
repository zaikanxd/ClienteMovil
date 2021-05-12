import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Solicitud, ISolicitud } from '../models/solicitud.model';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.page.html',
  styleUrls: ['./nueva-solicitud.page.scss'],
})
export class NuevaSolicitudPage implements OnInit {
  formGroupNuevaSolicitud: FormGroup;
  fechaDesembolso: string;
  minDate: string;
  errorMensaje: string = 'Campo obligatorio'
  solicitud: Solicitud
  constructor(public fb: FormBuilder,) { }

  ngOnInit() {
    this.setValuesFormBuilder();
    this.solicitud = new Solicitud(0, '', 0, 0, 0, 0, 0, '', 0, '', 0, 0,'',0,'')
  }

  customPickerOptionsProceso = {
    buttons: [{
      text: 'OK',
      handler: (event) => {
        this.fechaDesembolso = event.year.text + '-' + event.month.text + '-' + event.day.text
      }
    }]
  }

  private setValuesFormBuilder() {
    this.formGroupNuevaSolicitud = this.fb.group({
      DNI: [''],
      Nombre: [''],
      Celular: [''],
      Monto: ['', Validators.compose([Validators.required])],
      Cuotas: ['', Validators.compose([Validators.required])],
      nMontoCuota: ['', Validators.compose([Validators.required])],
      FechaDesembolso: ['', Validators.compose([Validators.required])],

    });
  }

  public formGroupNuevaSolicitudSubmit(event) {

    console.log('xx')
    if (this.formGroupNuevaSolicitud.invalid) {
      this.validateAllFormFields(event);
      return;
    } else {
      this.solicitud.DNI = event.value.DNI
      this.solicitud.nombre = event.value.Nombre
      this.solicitud.celular = event.value.Celular
      this.solicitud.nMontoCuota = event.value.nMontoCuota
      this.solicitud.nNroCuotas = event.value.nNroCuotas
      this.solicitud.dFechaDesembolso = this.fechaDesembolso
        this.registrarSolicitud(this.solicitud)
      

    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private registrarSolicitud(solicitud :ISolicitud) {
    console.log('xx')
  }

}
