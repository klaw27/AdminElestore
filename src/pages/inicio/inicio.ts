import { LoginPage } from './../login/login';
import { User } from '../../models/model';
import { NegociosPage } from '../negocios/negocios';
import { PedidosPage } from '../pedidos/pedidos';
import { PerfilPage } from '../perfil/perfil';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from 'ionic-angular';
import { ModalPedidoPage } from '../modal-pedido/modal-pedido';
import { Storage } from '@ionic/storage';


// @IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public userModel: User = new User();
  imgSource:any  = '/assets/imgs/user.png';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _sanitizer: DomSanitizer,
    private afdb: AngularFireDatabase,
    public modalCtrl: ModalController,
    public storage: Storage)
  {
      this.userModel = navParams.get('item');

      this.imgSource = this.userModel.fotografia !=='/assets/imgs/user.png' ? 
                        this._sanitizer.bypassSecurityTrustResourceUrl(this.userModel.fotografia): this.imgSource;

      // this.userModel.fotografia = this.userModel.fotografia !== ""? 'data:image/jpeg;base64,' + this.userModel.fotografia: this.userModel.fotografia; 
      // this.imgSource = this.userModel.fotografia != ""? this.userModel.fotografia : this.imgSource;
      console.log(this.userModel);

      // this.afdb.list("pedidos/53").snapshotChanges().subscribe(data=>{
      //   data.map(data=>{
      //     let info = data.payload.val();
      //     this.presentModal(info);
      //   });
      // });
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
    this.navCtrl.push(NegociosPage,{item:this.userModel});
  }

  cerrarSesion($event){
    this.remove('usuario');
    this.navCtrl.push(LoginPage);
  }

  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
}
