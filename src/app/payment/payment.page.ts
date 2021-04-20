import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymethod:any = 'paypal'
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goSummary()
  {
    this.navCtrl.navigateForward('summary');
  }

}
