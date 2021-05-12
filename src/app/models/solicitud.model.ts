export interface ISolicitud {
    idSolicitud: number;
    dFecha: string;
    idCliente: number;
    idEstado: number;
    idModalidad: number;
    nCapital: number;
    nMontoCuota: number;
    dFechaDesembolso: string;
    nNroCuotas: number;
    idEstadoAprobacion: number
    idUsuarioEstadoAprobacion: string
    nTEM: number
    nombre:string
    celular :number
    DNI :string
}

export class Solicitud implements ISolicitud {
    constructor(
        public idSolicitud: number,
        public dFecha: string,
        public idCliente: number,
        public idEstado: number,
        public idModalidad: number,
        public nCapital: number,
        public nMontoCuota: number,
        public dFechaDesembolso: string,
        public nNroCuotas: number,
        public idUsuarioEstadoAprobacion: string,
        public idEstadoAprobacion: number,
        public nTEM: number,
        public nombre :string,
        public celular : number,
        public DNI : string

    ) {
        this.idSolicitud = idSolicitud;
        this.dFecha = dFecha;
        this.idCliente = idCliente;
        this.idEstado = idEstado;
        this.idModalidad = idModalidad;
        this.nCapital = nCapital;
        this.nMontoCuota = nMontoCuota;
        this.dFechaDesembolso = dFechaDesembolso;
        this.nNroCuotas = nNroCuotas;
        this.idUsuarioEstadoAprobacion = idUsuarioEstadoAprobacion;
        this.idEstadoAprobacion = idEstadoAprobacion;
        this.nTEM = nTEM
        this.nombre =  nombre 
        this.celular = celular
        this.DNI = DNI
    }
}
