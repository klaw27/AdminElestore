
export class User
{
  clientid:string = "";
  nombre: string = "";
  apellidoPaterno: string = "";
  apellidoMaterno: string = "";
  nombreUsuario:string = "";
  password: string = "";
  confirmPassword: string = "";
  email : string = "";
  numeroTelefonico:string = "";
  negocio: Negocio[];
  fotografia: any;

  constructor()
  {

  }
}

export class Negocio
{
    clientid: string = "";
    negocioid; string = "";
    nombre:string = "";
    callenumero:string = "";
    colonia:string = "";
    ciudad:string = "";
    estado:string = "";
    codigopostal:string = "";
    horaapertura:string = "";
    horacierre:string = "";
    categoria:string = "";
    subcategoria:string = "";
    FK_subcategoria:number = -1;
    descripcion:string = "";
    latitud:string = "";
    longitud:string = "";
    active:number = 1;
    fotografia:any;
    fotografia2:any;
    id_negocio:number = 0;

    constructor()
  {

  }
}

export class CatNegocio
{
   id_catNegocio:number = -1;
   nombre:string = "";
   descripcion:string = "";

   constructor()
  {

  }
}

export class SubCatNegocio
{
   nombre:string = "";
   descripcion: string = "";
   fK_CATNEGOCIO:number = -1;
   id_catNegocio:number = -1;

   constructor()
  {

  }
}

export class Producto
{
  clave:string = "";
  complemento: string = "";
  descripcion: string = "";
  estatus: number = 1;
  fotografia:any;
  id_catProducto:"";
  id_producto:number = 0;
  negocioid: string =  "";
  nombre: string = "";
  otracategoria:string = "";
  precio: number = 0;
  tiempopreparacion:number; 
  FK_idNegocio:number;
}

export class CatProducto
{
  id_catProducto:number = 0;
  nombre:string = "";
  descripcion:string = "";
  clave:number = 0;
  estatus:number = 0;
}

