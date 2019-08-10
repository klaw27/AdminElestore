import { PedidosPage } from './../pedidos/pedidos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {

  pedido:any;
  constructor(public navCtrl: NavController
    , public navParams: NavParams) {

      this.pedido =  navParams.data.pedido;
  }

  ionViewDidLoad() {
    
  }
  back()
  {
    this.navCtrl.push(PedidosPage);
  }
}
