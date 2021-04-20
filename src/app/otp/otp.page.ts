import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  next(el) {
    el.setFocus(); 
  }

  goHome()
  {
    this.navCtrl.navigateRoot('home');
  }


}
