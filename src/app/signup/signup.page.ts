import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MovilService } from '../services/movil.service';
import { Cliente, ICliente } from '../models/cliente.model';
import { UiServiceService } from '../services/alerts.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  cliente: ICliente = null;
  constructor(private navCtrl: NavController, private movilService: MovilService,private uiService: UiServiceService) { }

  ngOnInit() {
    this.cliente = new Cliente(0, '', '', '', '', 0, '', '', '', '', 0)
  }

  goOTP() {
    this.movilService.insertarClave(this.cliente).subscribe(res => {
      debugger;
      if (res == 200) {
        this.navCtrl.navigateForward('login');
       }else{
        this.uiService.alertaInformativa('ocurrió un error');
       }
    });

  }

}
