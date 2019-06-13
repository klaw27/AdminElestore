import { PedidosNoEntregadosPage } from './../pedidos-no-entregados/pedidos-no-entregados';
import { PedidosEntregadosPage } from './../pedidos-entregados/pedidos-entregados';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../../models/model';
import { PedidosTodosPage } from '../pedidos-todos/pedidos-todos';

// @IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  userModel: User = new User();

  public pedidosTodos = PedidosTodosPage;
  public pedidosEntregados = PedidosEntregadosPage;
  public pedidosNoEntregados = PedidosNoEntregadosPage;

  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private afdb: AngularFireDatabase,)
  {
    this.userModel =  navParams.get('item');
  }


  ionViewDidLoad() {}
  ionViewWillEnter()
  {
    this.afdb.list("pedidos/53").snapshotChanges().subscribe(data=>{
        data.map(data=>{
          let info = data.payload.val();

        });
      });
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

}
