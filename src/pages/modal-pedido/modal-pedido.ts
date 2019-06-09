import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

declare var google;



/**
 * Generated class for the ModalPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-pedido',
  templateUrl: 'modal-pedido.html',
})
export class ModalPedidoPage {

  info = {
    cliente:{
      nombre: "",
      apellidoPat: "",
      apellidoMat: ""
    },
    subtotal: 0
  };
  productos = [];
  rechazado:boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    let data = this.navParams.get('data');
    this.info = data;
    console.log(this.info);  
    this.productos = data['productos'];
}

rechazar(){
  this.rechazado = true;
}

aceptar(){
  this.afdb.database.ref("ubicacion").once("value",ubicacion=>{
    let origen = {
      lat: this.productos[0]['latitud'],
      lng: this.productos[0]['longitud'],
    }
    let ubicaciones = [];
    for (const key in ubicacion.val()) {
      ubicaciones.push({...ubicacion.val()[key],
        id: key});
    }
  
    const distancias = this.getAllDistance(ubicaciones,origen);
    distancias.then(data=>{
      let menor = 0;
      let key = 0;
      data.map((data,index)=>{
        if( data['response']['status'] == "OK"){
          if(index == 0){
            menor = data['response']['distance']['value'];
            key = data['key'];
          }
          else{
            if(menor > data['response']['distance']['value']){
              menor = data['response']['distance']['value'];
              key = data['key'];
            }
          }
        }
      });
      console.log(menor);
      console.log(key);


    });
  });
}

getDistance (start, end) {
  const origin = new google.maps.LatLng(start['lat'], start['lng']);
  const final = new google.maps.LatLng(end['lat'], end['lng']);
  const service = new google.maps.DistanceMatrixService();

  return new Promise((resolve, reject) => {
    service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [final],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC
    }, (response, status) => {
      if(status === 'OK') {
        resolve({ 
          response: response.rows[0].elements[0],
          key: start['id']
         },
          );
      } else {
        reject(new Error('Not OK'));
      }
    }
  );
  });
}

 getAllDistance (starts, end) {
  const promisedDistances = starts.map((start) => this.getDistance(start, end));
  // Promise.all turns an array of promises into a promise
  // that resolves to an array.
  return Promise.all(promisedDistances);
}

enviarInfo(){
  
}

}
