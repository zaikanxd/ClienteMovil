import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  Login()
  {
    this.navCtrl.navigateForward('home');
  }

  goSignup()
  {
    this.navCtrl.navigateForward('signup');
  }

  goForgetPassword()
  {
    this.navCtrl.navigateForward('forgotpassword');
  }

}
