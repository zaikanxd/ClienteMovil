import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular';
import { ISession, Session } from '../models/session.model';


@Injectable({ 
    providedIn: 'root'
})
export class SessionStorageService {

    observer = new BehaviorSubject<ISession>(new Session(0,'','','','','',0,'','',0,''));
    private keySession: string = "microbankMovil";
    session: Session = new Session(0,'','','','','',0,'','',0,'');

    constructor(private storage: Storage, private navCtrl: NavController,public alertController: AlertController,) {
        this.getLogin()
    }

    setAudit(dataSession): void {
        this.storage.set(this.keySession, dataSession)
        this.session = dataSession;
    }

    getSession(): Promise<ISession> {
        return this.storage.get(this.keySession)
    }

    async getDatos() {
        this.session = await this.storage.get(this.keySession)
    }

    async getLogin() {
        this.session = await this.storage.get(this.keySession) || null;
    }


    logout() {
        this.session = null;
        this.storage.clear();
        this.navCtrl.navigateRoot('/login', { animated: true });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '¿Cerrar sesión?',
          message: 'si continua tendrá que iniciar sesión luego',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Aceptar',
              handler: () => {
                this.logout();
              }
            }
          ]
        });
    
        await alert.present();
      }

}
