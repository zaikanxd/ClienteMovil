export interface ICliente {
    clienteID: number;
    nombres: string;
    apellidoPat: string;
    apellidoMat: string;
    nombreCompleto: string;
    tipoDocumentoName: string;
    tipoDocumentoID: number;
    documento: string;
    FotoRuta: string;
    empresaID: number;
    password: string
}

export class Cliente implements ICliente {
    constructor(
        public clienteID: number,
        public nombres: string,
        public apellidoPat: string,
        public apellidoMat: string,
        public nombreCompleto: string,
        public tipoDocumentoName: string,
        public tipoDocumentoID: number,
        public documento: string,
        public FotoRuta: string,
        public empresaID: number,
        public password: string,

    ) {
        this.clienteID = clienteID;
        this.nombres = nombres;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.nombreCompleto = nombreCompleto;
        this.tipoDocumentoName = tipoDocumentoName;
        this.tipoDocumentoID = tipoDocumentoID;
        this.documento = documento;
        this.FotoRuta = FotoRuta;
        this.empresaID = empresaID;
        this.password = password;
    }
}
