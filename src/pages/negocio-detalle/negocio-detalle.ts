import { InicioPage } from './../inicio/inicio';
import { NuevonegocioPage } from './../nuevonegocio/nuevonegocio';
import { NegocioDetalleEditarPage } from './../negocio-detalle-editar/negocio-detalle-editar';
import { MapPage } from './../map/map';
import { Negocio, Producto, User } from './../../models/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { NegocioAgregarProductoPage } from '../negocio-agregar-producto/negocio-agregar-producto';
import { Geolocation } from '@ionic-native/geolocation';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForOf } from '@angular/common';
import { NegocioEditarProductoPage } from '../negocio-editar-producto/negocio-editar-producto';


// @IonicPage()
@Component({
  selector: 'page-negocio-detalle',
  templateUrl: 'negocio-detalle.html',
})
export class NegocioDetallePage {

  userModel: User = new User();

  imgSourceProd:any  = '/assets/imgs/user.png';

  imgSourceBanner:any  = '/assets/imgs/tienda-online-icono-png.png';
  imgSourceLogo:any  = '/assets/imgs/tienda-online-icono-png.png';

  mostrarDiv: boolean = false;
  productos: Producto[];

  toast:any;
  //producto model
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public api: ElstorapiProvider,
    private _sanitizer: DomSanitizer,
    private alertCtrl: AlertController,
    public toastController: ToastController) {

      this.userModel =  navParams.get('item');
      this.userModel === undefined ? this.userModel = new User(): this.userModel;
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){ 
    
    if(this.userModel.negocio[0] !== undefined)
    {
      this.imgSourceBanner = this.userModel.negocio[0].fotografia !=='/assets/imgs/tienda-online-icono-png.png' ? 
                        this._sanitizer.bypassSecurityTrustResourceUrl(this.userModel.negocio[0].fotografia): this.imgSourceBanner;

      this.imgSourceLogo = this.userModel.negocio[0].fotografia2 !=='/assets/imgs/tienda-online-icono-png.png' ? 
      this._sanitizer.bypassSecurityTrustResourceUrl(this.userModel.negocio[0].fotografia2): this.imgSourceLogo;

      this.cargarProducto();
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Agrega un negocio',
        subTitle: `Aun no tienes ninguno negocio registrado!`,
        buttons: [
          {
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            this.navCtrl.push(NuevonegocioPage,{item:this.userModel});
            },
         },
         {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
            this.navCtrl.push(InicioPage, {item:this.userModel});
          }
         }
        ]
      });
      alert.present().then(() => {
           
      });
    } 
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarProducto(biz)
  {
    this.navCtrl.push(NegocioAgregarProductoPage, {item:this.userModel});
  }

  verMapa(biz)
  {
    
    this.navCtrl.push(MapPage, {item:biz});
  }

  editarNegocio($event, bz)
  {
    this.navCtrl.push(NegocioDetalleEditarPage, {item:this.userModel.negocio[0]})
  }

  cargarProducto()
  {
    try {
      this.api.getProductos(this.userModel.negocio[0]).subscribe(
        (data: Producto[]) => {
          if(data !== null)
          {
           
          
            this.productos = data;
          }
          else
          {
              // toast.present().then(() => {
              //   toast.dismiss();
              // });
          }
        },
         (error: any) =>  {
          this.toast = this.toastController.create({
            message: error,
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Ok'
          });
           
              
            this.toast.onDidDismiss(() => {
              
            });
            this.toast.present().then(() => {
                
              });
          });
      
    } catch (error) {
      debugger
    }
    
  }

  borrarProducto(prod)
  {
    this.api.borrarProducto(prod).subscribe(
      (data: Producto[]) => {
 
        if(data !== null)
        {
          this.productos = data;
        }
        else
        {
            // toast.present().then(() => {
            //   toast.dismiss();
            // });
        }
      },
       (error: any) =>  {
        this.toast = this.toastController.create({
          message: error,
          showCloseButton: true,
          position: 'bottom',
          closeButtonText: 'Ok'
        });
         
            
          this.toast.onDidDismiss(() => {
            
          });
          this.toast.present().then(() => {
              
            });
        });
  }

  editarProducto(prod)
  {
    this.navCtrl.push(NegocioEditarProductoPage,{item:this.userModel, item2:prod})
  }
}
