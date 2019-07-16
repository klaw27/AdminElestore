import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';

// @IonicPage()
@Component({
  selector: 'page-pedidos-todos',
  templateUrl: 'pedidos-todos.html',
})
export class PedidosTodosPage {

  public items: Observable<any[]>;
  pedidos:any;

  objPedidosTodos:any;;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public api: ElstorapiProvider,
    private afdb: AngularFireDatabase,
    public storage: Storage) {
  }

  ionViewWillEnter()
  {
    let pedidos = this.get('usuario');
  }

  public async get(settingName)
  {
    return await this.storage.get(`setting:${ settingName }`).then((value) =>{
      this.pedidos =value;
      this.afdb.list("pedidos/" + `${this.pedidos.clientid}`).snapshotChanges().subscribe(data=>{
        data.map(data=>{
          let info = data.payload.val();
          this.objPedidosTodos = info;
          debugger
        });
      });
    });;
  }
}
