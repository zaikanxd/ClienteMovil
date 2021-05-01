import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovilService } from '../services/movil.service';
import { ICredito, Credito } from '../models/credito.model';
import { UtilityService } from '../shared/utility.service';
import { Kardex } from '../models/kardexCredito.model';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {
  credito: ICredito;
  type: any;
  kardexs: Kardex[] = [];

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController, private movilService: MovilService,
    public utilityService: UtilityService) { }

  ngOnInit() {

    this.credito = new Credito(0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '')
    this.consultarCredito();
  }


  goAddreview() {
    this.navCtrl.navigateForward('addreview');
  }

  public consultarCredito() {
    this.movilService.consultarCredito().subscribe(res => {
      this.credito = res;
      this.consultarKardex(this.credito.idCredito, 1)
    },
      error => {
        // this.uiService.presentToast('Hubo un error al listar resumen.');
        throw error;
      },
      () => {

      });
  }
  private consultarKardex(idCredito: number, ind: number) {
    this.movilService.buscarKardexCredito(idCredito, ind).subscribe(res => {
      debugger;
      this.kardexs = res;

    },
      error => {
        // this.uiService.presentToast('Hubo un error al listar resumen.');
        throw error;
      },
      () => {

      });
  }
}
