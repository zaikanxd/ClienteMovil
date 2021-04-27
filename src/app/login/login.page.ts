import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MovilService } from '../services/movil.service';
import { Cliente, ICliente } from '../models/cliente.model';
import { UiServiceService } from '../services/alerts.service';
import { SessionStorageService } from '../session/session.service';
import { Session } from '../models/session.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cliente: ICliente = null;
  session: Session;
  
  constructor(private navCtrl: NavController,
    private movilService: MovilService,
    private uiService: UiServiceService,
    private sessionService: SessionStorageService
  ) { }

  ngOnInit() {
    this.cliente = new Cliente(0, '', '', '', '', '', 0, '', '', 0, '')
  }

  Login() {
    this.movilService.validateLogin(this.cliente).subscribe(res => {
      this.session = res;
      debugger;
       if(this.session.apellidoPat){
        this.sessionService.setAudit(this.session);
        this.navCtrl.navigateForward('home');
      }else{
         this.uiService.alertaInformativa('usuario o contraseña incorrecta');
       }
    });

  }

  goSignup() {
    this.navCtrl.navigateForward('signup');
  }

  goForgetPassword() {
    this.navCtrl.navigateForward('forgotpassword');
  }

}
