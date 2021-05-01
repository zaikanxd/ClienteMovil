export interface IKardex {
    nMontoOperacionTotal: number;
    nCapitalTotal: number;
    nInteresTotal: number;
    nOtrosTotal: number;
    nMoraTotal: number;
    nIgvTotal: number;
    dFecha: string;
    cTipoOperacion: string;
    nMontoOperacion: number;

}

export class Kardex implements IKardex {
    constructor(

        public nMontoOperacionTotal: number,
        public nCapitalTotal: number,
        public nInteresTotal: number,
        public nOtrosTotal: number,
        public nMoraTotal: number,
        public nIgvTotal: number,
        public dFecha: string,
        public cTipoOperacion: string,
        public nMontoOperacion: number

    ) {

        this.nMontoOperacionTotal = nMontoOperacionTotal;
        this.nCapitalTotal = nCapitalTotal;
        this.nInteresTotal = nInteresTotal;
        this.nOtrosTotal = nOtrosTotal;
        this.nMoraTotal = nMoraTotal;
        this.nIgvTotal = nIgvTotal;
        this.dFecha = dFecha;
        this.cTipoOperacion = cTipoOperacion;
        this.nMontoOperacion = nMontoOperacion
    }
}
