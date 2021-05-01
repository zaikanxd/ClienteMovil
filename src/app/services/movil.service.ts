import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente, ICliente } from '../models/cliente.model';
import { DataService1 } from './data.service';
import { environment } from '../../environments/environment';
import { SessionStorageService } from '../session/session.service';
import { Session } from '../models/session.model';



@Injectable({
    providedIn: 'root'
})

export class MovilService {
    session: Session = new Session(0, '', '', '', '', '', 0, '', '', 0, '');

    constructor(private dataService: DataService1, private sessionService: SessionStorageService) { }
    validLoginUrl: string = 'cliente/obtener';
    insertarClaveUrl: string = 'cliente/insertar'
    consultarCreditoUrl: string = 'credito/list'
    private busquedaKardexCreitoUrl: string = 'kardex/kardexCalendario';

    public validateLogin(cliente: Cliente): any {
        let parameters = new HttpParams();
        parameters = parameters.append("documento", String(cliente.documento));
        parameters = parameters.append("password", String(cliente.password));
        parameters = parameters.append("empresaID", String(1));

        this.dataService.set(this.validLoginUrl);
        return this.dataService.execGetJson(parameters);
    }

    public insertarClave(cliente: ICliente) {
        let parameters: string;
        parameters = JSON.stringify({
            documento: cliente.documento,
            password: cliente.password,
            empresaID: 1,

        });
        this.dataService._baseUri = environment.serviceMovilUrl + this.insertarClaveUrl;
        return this.dataService.execPutJson(parameters);

    }

    public consultarCredito() {
        let parameters = new HttpParams();
        parameters = parameters.append("documento", String(this.sessionService.session.documento));

        this.dataService.set(this.consultarCreditoUrl);
        return this.dataService.execGetJson(parameters);
    }

   public buscarKardexCredito(idCredito: number, ind: number): any {
        let parameters = new HttpParams();
        parameters = parameters.append("pIdCredito", String(idCredito));
        parameters = parameters.append("pInd", String(ind));
        this.dataService.set(this.busquedaKardexCreitoUrl);
        return this.dataService.execGetJson(parameters);
      }
}