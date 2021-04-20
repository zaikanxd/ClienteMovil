import { CartPage } from './../cart/cart.page';
import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 1.8,
    spaceBetween: -2
  };
  constructor(private navCtrl: NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  goProducts()
  {
    this.navCtrl.navigateForward('products');
  }


  goCart()
  {
    this.presentCartModal()
  }


  async presentCartModal() {
    const modal = await this.modalCtrl.create({
      component: CartPage
    });
    return await modal.present();
  }


  goSearch()
  {
    this.navCtrl.navigateForward('search');
  }

  goProductDetail()
  {
    this.navCtrl.navigateForward('productdetail');  
  }


}
