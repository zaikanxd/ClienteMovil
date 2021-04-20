import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goOrderDetails(otype:any)
  {
    this.setNavigation(otype,'orderdetails');
    console.log(otype);
    //go to order details occroding to type
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
