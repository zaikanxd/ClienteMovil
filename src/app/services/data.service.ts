import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService1 {
    public _baseUri: string;

    private headers = new HttpHeaders({ "Content-Type": "application/json" });
    private headersOctet = new HttpHeaders({ "Content-Type": "application/octet-stream" });

    constructor(private http: HttpClient) { }


    //#region Methods
    set(baseUri: string, pageSize?: number): void {
        this._baseUri = environment.serviceMovilUrl + baseUri;
    }


    /**
    *Ejecuta el metodo post, enviando como cabecera el Json
    */
    execPostJson(data?: any): any {
        return this.http.post(this._baseUri, data, { headers: this.headers });
    }

    execPostJsonHeader(data: any, headers: any): any {
        return this.http.post(this._baseUri, data, { headers: headers });
    }

    execGetOctet(data?: any): any {
        return this.http.get(this._baseUri, { params: data, headers: this.headersOctet, responseType: "blob" });
    }

    execGetJson(data?: any): any {
        return this.http.get(this._baseUri, { params: data, headers: this.headers });
    }

    // execGetOctet(data?: any): any {
    //     return this.http.get(this._baseUri, { params: data, headers: this.headersOctet, responseType: "blob" });
    // }

    execPutJson(data?: any): any {
        return this.http.put(this._baseUri, data, { headers: this.headers });
    }

    execDeleteJson(data?: any): any {
        return this.http.delete(this._baseUri, { headers: this.headers, params: data })
    }


    /**
    * @param {string} url url del servicio a utilizar.
    * @param {URLSearchParams} parameters parametros a enviar al servicio.
    **/
    /*
    execPostUrlencoded(url: string, parameters: URLSearchParams): Promise<any> {
        let data: Observable<any[]>;
        let options = this.addHeaderUrlencoded();

        return this.http.post(url, parameters.toString(), options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }
    */

    /**
    * Extrae información del objeto response y lo devuelve en formato json
    * @param res
    */
    // public extractData(res: Response) {
    //     const body = res.json();
    //     return body || {};
    // }

    /**
    * Obtiene el mensaje de error y lo devuelve
    * @param error
    */
    // public handleError(error: any): Promise<any> {
    //     // console.log('An error occurred', error);
    //     return Promise.reject(error.message || error);
    // }
    //#endregion
}
