import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goProductDetail()
  {
    this.navCtrl.navigateForward('productdetail');  
  }

}
