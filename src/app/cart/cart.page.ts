import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  haveCoupon: boolean = false;
  constructor(private modalCtrl:ModalController,private navCtrl: NavController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

  hideCoupon()
  {
    this.haveCoupon = !this.haveCoupon;
  }

  goAddress()
  {
    this.close();
    this.setNavigation('delivery','address');
  }

  setNavigation(param:string,url:string)  //navigate with parameters
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          type: param
      }
    };
    
    this.navCtrl.navigateForward([url],navigationExtras);
  }

}
