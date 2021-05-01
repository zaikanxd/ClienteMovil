import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }


    formatDecimalInput(data: any): string {
        return Number(data).toFixed(2);
    }

    formatDate(data: string): string {
        return moment(data, "YYYY-MM-DD").format("YYYY-MM-DD");
    }
    formatDateSlash(data: string): string {
        return moment(data, "YYYY-MM-DD").format("DD/MM/YYYY");
    }

    formatDateReverse(data: string): string {
        return moment(data, "DD-MM-YYYY").format("YYYY-MM-DD");
    }

    obtenerFechaMinima(fechaSistema: string, dias: number) {
        var fecha = moment(fechaSistema);
        let resultado = fecha.subtract(dias, 'days').toDate();
        return moment(resultado, "DD-MM-YYYY").format("YYYY-MM-DD");
    }

    formatStringToDate(data: string) {
        let valor = moment(data, "DD/MM/YYYY");
        return valor;
    }
    formatDateInput(data: string): string {
        return moment(data, "YYYY-MM-DD").format("DD/MM/YYYY");
    }
    getCurrentDate() {
        return moment().format("DD/MM/YYYY HH:mm");
    }
    getMomentString(): string {
        return moment().format('YYYYMMDDHHmmssx');
    }

}