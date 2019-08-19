import { DetallePedidoPage } from './../detalle-pedido/detalle-pedido';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import { ElstorapiProvider } from '../../../providers/elstorapi/elstorapi';

// @IonicPage()
@Component({
  selector: 'page-pedidos-todos',
  templateUrl: 'pedidos-todos.html',
})
export class PedidosTodosPage {

  public items: Observable<any[]>;
  pedidos:any;

  objPedidosTodos = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public api: ElstorapiProvider,
    private afdb: AngularFireDatabase,
    public storage: Storage,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter()
  {
    let pedidos = this.get('usuario');
  }

  public async get(settingName)
  {
    this.objPedidosTodos = [];
    
    let message:string = "Obteniendo pedidos...";
    let loader = this.loadingCtrl.create({
      content: message
    });

    return await this.storage.get(`setting:${ settingName }`).then((value) =>{
      this.pedidos =value;
      this.afdb.list("pedidos/" + `${this.pedidos.negocio[0].id_negocio}`).snapshotChanges().subscribe(data=>{
        loader.present().then(() =>
        {
          data.map(data=>{
            let info = data.payload.val();
            this.objPedidosTodos.push(info);
          });
          loader.dismiss();
        });
      });
    });;
  }

  detallePedido(pedido, $event){
      let profileModal = this.modalCtrl.create(DetallePedidoPage, { pedido});
      profileModal.onDidDismiss(data => {
        console.log(data);
      });
    profileModal.present();
  }
}
