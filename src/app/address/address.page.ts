import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  type:any;
  title: any;
  constructor(private navCtrl: NavController,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params["type"];
  });


  this.setRoute();
  }

  goPayment()
  {
    this.navCtrl.navigateForward('payment');
  }

 setRoute()
 {
   if(this.type == 'delivery')
   {
     this.title = 'Deliver Location'
     console.log(this.type);
   }


   if(this.type == 'my')
   {
     this.title = 'My Locations'
     console.log(this.type);
     console.log(this.title);
   }
 }

}
