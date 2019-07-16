import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

// declare var objPedidosEntregados:any;
// @IonicPage()
@Component({
  selector: 'page-pedidos-entregados',
  templateUrl: 'pedidos-entregados.html',
})
export class PedidosEntregadosPage {

  pedidos:any;
  objPedidosEntregados:any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afdb: AngularFireDatabase,
    public storage: Storage,) 
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
    return await this.storage.get(`setting:${ settingName }`).then((value) =>
    {
      this.pedidos =value;
    
      this.afdb.list("pedidos/" + `${this.pedidos.negocio[0].id_negocio}`).snapshotChanges().subscribe((data) =>
      {
        data.map((data) =>
        {
          let info = data.payload.val();
          // let prod = info.productos;
          
          // prod.forEach(element => {
          //   debugger
          // this.objPedidosEntregados.push(element);
          // });
      
          debugger
        });
      });
    });;
  }

}
