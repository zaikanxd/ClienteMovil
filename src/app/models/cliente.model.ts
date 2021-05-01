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
    empresaID: number
    password: string
}

export class Cliente implements ICliente {
    constructor(
        public clienteID: number,
        public nombres: string,
        public apellidoPat: string,
        public apellidoMat: string,
        public nombreCompleto: string,
        public tipoDocumentoID: number,
        public tipoDocumentoName: string,
        public documento: string,
        public FotoRuta: string,
        public password: string,
        public empresaID: number,

    ) {
        this.clienteID = clienteID;
        this.nombres = nombres;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.nombreCompleto = nombreCompleto;
        this.tipoDocumentoID = tipoDocumentoID;
        this.tipoDocumentoName = tipoDocumentoName;
        this.documento = documento;
        this.FotoRuta = FotoRuta;
        this.password = password;
        this.empresaID = empresaID
    }
}
