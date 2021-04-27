import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente, ICliente } from '../models/cliente.model';
import { DataService1 } from './data.service';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})

export class MovilService {
    constructor(private dataService: DataService1) { }
    validLoginUrl: string = 'cliente/obtener';
    insertarClaveUrl: string = 'cliente/insertar'

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
}