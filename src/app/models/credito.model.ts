export interface ICredito {
    idCredito: number;
    AsesorName: string;
    dFechaDesembolso: string;
    nDeudaFecha: number;
    nPrestamo: number;
    nMontoCuota: number;
    nNumeroCuotas: number;
    nSaldoCapital: number;
    nDiasAtraso: number;
    cEstado: string;
    nNroCreditos: number;
    nPorcentaje: number
    dFechaVencimiento: string;
}

export class Credito implements ICredito {
    constructor(
        public idCredito: number,
        public AsesorName: string,
        public dFechaDesembolso: string,
        public nDeudaFecha: number,
        public nPrestamo: number,
        public nMontoCuota: number,
        public nNumeroCuotas: number,
        public nSaldoCapital: number,
        public nDiasAtraso: number,
        public cEstado: string,
        public nNroCreditos: number,
        public nPorcentaje: number,
        public dFechaVencimiento: string

    ) {
        this.idCredito = idCredito;
        this.AsesorName = AsesorName;
        this.dFechaDesembolso = dFechaDesembolso;
        this.nDeudaFecha = nDeudaFecha;
        this.nPrestamo = nPrestamo;
        this.nMontoCuota = nMontoCuota;
        this.nNumeroCuotas = nNumeroCuotas;
        this.nSaldoCapital = nSaldoCapital;
        this.nDiasAtraso = nDiasAtraso;
        this.cEstado = cEstado;
        this.nNroCreditos = nNroCreditos
        this.nPorcentaje = nPorcentaje
        this.dFechaVencimiento = dFechaVencimiento
    }
}