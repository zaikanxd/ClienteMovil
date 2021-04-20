import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.page.html',
  styleUrls: ['./successmodal.page.scss'],
})
export class SuccessmodalPage implements OnInit {

  constructor(private modalCtrl:ModalController,private navCtrl: NavController) { }
  
  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

  goHome()
  {
    this.close();
    this.navCtrl.navigateRoot('home');
  }

}
