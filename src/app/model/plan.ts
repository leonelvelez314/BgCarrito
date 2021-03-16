export class Plan {
    codigo:string;
    descripcion:string;

    domicilios:number;

    frecuencia:string;

    icono:string;

    nombre:string;

    plan:number;
    valor:string;
    productosPlan : productoPlan;


    
}

export class PlanResponse {
    
    codigoRetorno:string;
    retorno :Plan[];

    
}


export class productoPlan{
    descripcion :string;
    cantidad:number;
}
