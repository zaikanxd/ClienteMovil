import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  slideOpts = {
    slidesPerView: 1.8,
    spaceBetween: -2
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
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

}
