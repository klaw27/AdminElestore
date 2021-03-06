import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';

// @IonicPage()
@Component({
  selector: 'page-pedidos-no-entregados',
  templateUrl: 'pedidos-no-entregados.html',
})
export class PedidosNoEntregadosPage {

  pedidos:any;
  objPedidosNoEntregados= [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afdb: AngularFireDatabase,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter()
  {
    let pedidos = this.get('usuario');
  }

  public async get(settingName)
  {
    this.objPedidosNoEntregados = [];
    
    let message:string = "Obteniendo pedidos no entregados...";
    let loader = this.loadingCtrl.create({
      content: message
    });

    return await this.storage.get(`setting:${ settingName }`).then((value) =>
    {
      this.pedidos =value;
      this.afdb.list("pedidos/" + `${this.pedidos.negocio[0].id_negocio}`).snapshotChanges().subscribe((data) =>
      {
        this.objPedidosNoEntregados = [];

        // loader.present().then(() =>
        // {
          data.map((data) =>
          {
            let info = data.payload.val();
            this.objPedidosNoEntregados.push(info);
          });
        //   loader.dismiss();
        // });
      });
    });;
  }
  detallePedido(pedido, $event)
  {
    let profileModal = this.modalCtrl.create(DetallePedidoPage, { pedido});
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}
