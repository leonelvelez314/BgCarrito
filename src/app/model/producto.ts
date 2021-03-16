
export class ProductoResponse {
    codigoRetorno:string;
    mensajeRetorno:string;
    data:Producto[];
}
export class Producto {
    descripcion:string;
    detalle:string;
    estado:boolean;
    id:number;
    imagen:string;
    precio:string;

    check:boolean = false;
    cantidad : number = 0;
}

