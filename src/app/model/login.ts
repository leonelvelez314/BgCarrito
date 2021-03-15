export class LoginClass {
    transaccion:string;
    datosUsuario: DatosUsuarios;
}

export class DatosUsuarios
{
    email :string;
    nombre:string;
    password :string;
    plan:number;
    telefono:string;
}

export class LoginClassResponse
{
    codigoRetorno :string;
    mensajeRetorno :string;
    usuario:DatosUsuarios;
    token:string;
}