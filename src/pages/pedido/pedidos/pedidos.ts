import { PedidosNoEntregadosPage } from './../pedidos-no-entregados/pedidos-no-entregados';
import { PedidosEntregadosPage } from './../pedidos-entregados/pedidos-entregados';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { PedidosTodosPage } from '../pedidos-todos/pedidos-todos';
import { Storage } from '@ionic/storage';
import { DefaultKeyValueDiffer } from '@angular/core/src/change_detection/differs/default_keyvalue_differ';
import { User } from '../../../models/model';
import { InicioPage } from '../../inicio/inicio';
import { toBase64String } from '@angular/compiler/src/output/source_map';

// @IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  userModel: User = new User();
  pedidos:any;

  objPedidosTodos=[];


  public pedidosTodos = PedidosTodosPage;
  public pedidosEntregados = PedidosEntregadosPage;
  public pedidosNoEntregados = PedidosNoEntregadosPage;

  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private afdb: AngularFireDatabase,
            public storage: Storage)
  {
    this.userModel =  navParams.get('item');
  }


  ionViewDidLoad() {}
  ionViewWillEnter()
  {
    this.get('usuario');
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  public async get(settingName)
  {
    return await this.storage.get(`setting:${ settingName }`).then((value) =>
    {
      this.pedidos =value;
      this.afdb.list("pedidos/" + `${this.pedidos.negocio[0].id_negocio}`).snapshotChanges().subscribe((data) =>
      {
        data.map((data) =>
        {
          let info = data.payload.val();
          this.objPedidosTodos.push(info);
        });
      });
    });;
  }

  back()
  {
    if(this.userModel === undefined)
    {
      this.storage.get(`setting:${ 'usuario' }`).then((value) =>
      {
        this.userModel = value;
        this.navCtrl.push(InicioPage, {item:this.userModel});
      });
    }
    else{
      this.navCtrl.push(InicioPage, {item:this.userModel});
    }
  }
}
