import { HomePage } from './../home/home';
import { User } from '../../models/model';
import { PedidosPage } from '../pedidos/pedidos';
import { PerfilPage } from '../perfil/perfil';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NegocioDetallePage } from '../negocio-detalle/negocio-detalle';
import { ModalPedidoPage } from '../modal-pedido/modal-pedido';


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
    public storage: Storage)
  {
      this.userModel = navParams.get('item');
// debugger
//       this.afdb.list("pedidos/"+ this.userModel).snapshotChanges().subscribe(data=>{
//         data.map(data=>{
//           let info = data.payload.val();
//           this.presentModal(info);
//         });
//       });
  }

  // presentModal(data) {
  //   const modal = this.modalCtrl.create(ModalPedidoPage,{
  //     data: data
  //   },
  //   {
  //     cssClass: 'loading',
  //     showBackdrop: true
  //     });
  //   modal.present();
  // }


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
}
