import { Observable } from 'rxjs/Observable';
import { User, Negocio, CatNegocio, SubCatNegocio, Producto } from './../../models/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';


const url = 'https://ec2-13-57-42-231.us-west-1.compute.amazonaws.com:5001';
// const url = 'https://localhost:5001';

// local
 const baseurlRegistro: string = url + "/api/registro/usuario";
 const baseurlActualizar: string = url + "/api/cuenta/actualizar";
 const baseurlLogin: string = url + "/api/usuario/inicio";
 const baseurlRecuperar: string = url + "/api/cuenta/recuperar";

 const baseurlNegocio: string = url + "/api/negocio/agregar";
 const baseurlNegocioEditar: string = url + "/api/negocio/editar";
 const baseurlNegocioObtener: string = url + "/api/negocio/obtener";
 const baseurlCatNegocio: string = url + "/api/negocio/catnegocio";
 const baseurlSubCatNegocio: string = url + "/api/negocio/subcatnegocio";

 const baseurlProductoObtener: string = url + "/api/negocio/producto/obtener";
 const baseurlProductoAgregar: string = url + "/api/negocio/producto/agregar";

 const baseurlProductoBorrar: string = url + "/api/negocio/producto/borrar";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable()
export class ElstorapiProvider {

  private user: firebase.User;
  items: Observable<any[]>;

  constructor(public http: HttpClient) {
      
  }

  // obtenerPedidos():Observable<any[]>
  // {
  //    this.items = this.afDB.list('/pedidos').valueChanges();

  //    return this.items.pipe(
  //     tap((data: any) => {

  //     //console.log(data);
  // }),
  // catchError((err) => {

  //   throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
  //       })
  // );;
  // }

  registrarUsuario(usr: User): Observable<User>
  {
    let userModel =  JSON.stringify(usr);
    return this.http.post<User>(baseurlRegistro, userModel, httpOptions)
    .pipe(
      tap((data: any) => {

      //console.log(data);
  }),
  catchError((err) => {

    throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
        })
  );
  }


  actualizarCuenta(usr: User): Observable<User>
  {
    let userModel =  JSON.stringify(usr);
    return this.http.post<User>(baseurlActualizar, userModel, httpOptions)
    .pipe(
      tap((data: any) => {

        //console.log(data);
    }),
    catchError((err) => {

      throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
   );

  }
    recuperarCuenta(usr: User): Observable<User>
    {
      let userModel =  JSON.stringify(usr);
      return this.http.post<User>(baseurlRecuperar, userModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
          );
    }

    inicarSesion(usr: User): Observable<User>
    {
      let userModel =  JSON.stringify(usr);
      return this.http.post<User>(baseurlLogin, userModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    agregarNegocio(biz: Negocio): Observable<Negocio>
    {
      let negocioModel =  JSON.stringify(biz);
      return this.http.post<Negocio>(baseurlNegocio, negocioModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    editarNegocio(biz: Negocio): Observable<Negocio>
    {
      let negocioModel =  JSON.stringify(biz);
      return this.http.post<Negocio>(baseurlNegocioEditar, negocioModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    obtenerNegocio(clientid: string): Observable<Negocio[]>
    {
      let id =  JSON.stringify(clientid);
      return this.http.post<Negocio[]>(baseurlNegocioObtener, id, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    getCatNegocio(): Observable<CatNegocio[]>
    {
      return this.http.post<CatNegocio[]>(baseurlCatNegocio, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    getSubCatNegocio(id: number) : Observable<SubCatNegocio[]>
    {
      return this.http.post<SubCatNegocio[]>(baseurlSubCatNegocio, id, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    getProductos(negocio: Negocio) : Observable<Producto[]>
    {
      return this.http.post<Producto[]>(baseurlProductoObtener, negocio, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
          })
        );
    }

    agregarProducto(prod: Producto): Observable<Producto>
    {
      let prodModel =  JSON.stringify(prod);
      
      return this.http.post<Producto>(baseurlProductoAgregar, prodModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }

    borrarProducto(prod: Producto): Observable<Producto[]>
    {
      let prodModel =  JSON.stringify(prod);
      
      return this.http.post<Producto>(baseurlProductoBorrar, prodModel, httpOptions)
      .pipe(
        tap((data: any) => {

          //console.log(data);
      }),
      catchError((err) => {

        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
            })
        );
    }
}
