import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/catch';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';

// declare var objPedidosEntregados:any;
// @IonicPage()
@Component({
  selector: 'page-pedidos-entregados',
  templateUrl: 'pedidos-entregados.html',
})
export class PedidosEntregadosPage {

  pedidos:any;
  objPedidosEntregados=[];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afdb: AngularFireDatabase,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) 
    {

  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter()
  {
    let pedidos = this.get('usuario');
  }

  public async get(settingName)
  {
    this.objPedidosEntregados = [];
    
    let message:string = "Obteniendo pedidos entregados...";
    let loader = this.loadingCtrl.create({
      content: message
    });

    return await this.storage.get(`setting:${ settingName }`).then((value) =>
    {
      this.pedidos =value;
      this.afdb.list("pedidos/" + `${this.pedidos.negocio[0].id_negocio}`).snapshotChanges().subscribe((data) =>
      {
        this.objPedidosEntregados =[];
        // loader.present().then(() => 
        // {
          data.map((data) =>
          {
            let info = data.payload.val();
            this.objPedidosEntregados.push(info);
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
