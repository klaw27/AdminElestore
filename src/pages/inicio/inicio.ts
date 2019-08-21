import { HomePage } from './../home/home';
import { User } from '../../models/model';
import { PedidosPage } from '../pedido/pedidos/pedidos';
import { PerfilPage } from '../perfil/perfil';
import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NegocioDetallePage } from '../negocio/negocio-detalle/negocio-detalle';
import { RepartoPage } from './../reparto/reparto';

declare function escape(s:string): string;

// @IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public userModel: User = new User();
  // imgSource:any  = '/assets/imgs/user.png';
  fotografia:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _sanitizer: DomSanitizer,
    private afdb: AngularFireDatabase,
    public modalCtrl: ModalController,
    public storage: Storage,
    public alertCtrl: AlertController)
  {
      this.userModel = navParams.get('item');
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.userModel.fotografia}`);
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  verPerfil($event)
  {
      this.navCtrl.push(PerfilPage,{item:this.userModel});
  }

  verPedidos($event)
  {
    this.navCtrl.push(PedidosPage,{item:this.userModel});
  }

  verNegocios($event)
  {
    this.navCtrl.push(NegocioDetallePage,{item:this.userModel});
  }

  cerrarSesion($event){
    this.remove('usuario');
    this.navCtrl.push(HomePage);
  }

  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }

  solicarRepartidor(){
    this.navCtrl.push(RepartoPage);
  }


  async TipoReparto(){
    const alert = await this.alertCtrl.create({
      message: '¿Que tipo de servicio deseas?',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Solicitar Repartidor',
          value: 'repartidor',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Mandado',
          value: 'mandado'
        }
      ],
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler:(data:string) => {
            if(data == "mandado"){
              //this.navCtrl.navigateForward("/mandado");
            }else {
              this.navCtrl.push(RepartoPage);
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
