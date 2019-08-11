import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/catch';

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
    public loadingCtrl: LoadingController) 
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
        loader.present().then(() => {
          data.map((data) =>
          {
            let info = data.payload.val();
            this.objPedidosEntregados.push(info);
          });
          loader.dismiss();
        });
      });
    });;
  }

  detallePedido(pedido, $event)
  {

  }
}
