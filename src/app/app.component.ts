import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: 'home',
      icon: 'home-outline'
    },
    {
      title: 'Solicitud',
      url: 'solicitudes',
      icon: 'basket-outline'
    },
    {
      title: 'Crédito',
      url: 'orderdetails',
      icon: 'egg-outline'
    },
    {
      title: 'Mi Perfil',
      url: 'profile',
      icon: 'person-outline'
    },
    {
      title: 'Configuracíon',
      url: 'settings',
      icon: 'settings-outline'
    },
    {
      title: 'Salir',
      url: 'onboarding',
      icon: 'log-out-outline'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl:NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  goProfile()
  {
    this.navCtrl.navigateRoot('profile')
  }
}
