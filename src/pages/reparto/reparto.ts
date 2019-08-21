import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController, Select, AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InicioPage } from '../inicio/inicio';
import { PedidosPage } from '../pedido/pedidos/pedidos';


declare var google;
declare var OpenPay: any;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

/**
 * Generated class for the RepartoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reparto',
  templateUrl: 'reparto.html',
})
export class RepartoPage {
  @ViewChild('mySelect') selectRef: Select;

  
  coordenadas={};
  calle = "";
  calleSecundario = "";
  carrito = [];
  idNegocio: any;
  subTotal = 0;
  total = 0;
  costEnvio = 0;
  coordenadasDes={};
  calleDest = "";
  calleSecundarioDest = "";
  metPago="efectivo";
  nomDestino="";
  telDestino="";
  distancia=0;
  kmextra=0;
  Nokmextra=0;
  envio3km=0;
  envioTotal=0;
  quienPaga:any;
  flagMetodos:any;
  customerOpenid:any ='';
  tarjetas: any;
  flagCard:any;  
  dest_nombre:any ='';
  dest_tel:any ='';
  instrucciones:any ='';
  tarjetaSelect:any ='';
  cardCobro:any ='';
  customerCargo:any ='';
  ChargeRequest:any ='';
  deviceSessionId:any="";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public modalController: ModalController,
    public toastController: ToastController,
    private loadingCtrl:LoadingController,
    public alertCtrl: AlertController,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepartoPage');
    this.ubicacionActual();
  }

  ubicacionActual(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(this.coordenadas);
      this.coordenadas['lat'] = resp.coords.latitude;
      this.coordenadas['lng'] = resp.coords.longitude;
      this.calle = "";
      this.calleSecundario = "";
      this.callDistancia();
      this.loadMapa();
    });
  }

  callDistancia(){
    let origin = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );
    let destination = new google.maps.LatLng(this.coordenadasDes['latitud'], this.coordenadasDes['longitud'] );
    //console.log("direccion del destino " + destination);
    //let destination = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      { 
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC
    }, (response,status)=>{
      if ( status == "OK"){
        console.log(response);
        //this.distancia = response.rows[0].elements[0].distance.value / 1000;
        this.distancia = response.rows[0].elements[0].distance/ 1000;
        
        this.distancia = Math.floor(this.distancia);

        this.costEnvio = 30;
        if(this.distancia - 2 > 0){
          this.Nokmextra = this.distancia - 3;
           this.kmextra = this.distancia - 3;
           this.envio3km = this.costEnvio * 3;
          this.kmextra = this.kmextra * 3;
          this.costEnvio = this.costEnvio + this.kmextra;
          this.envioTotal = this.kmextra + this.envio3km;
        }else {
          this.Nokmextra =  0;
           this.envio3km = this.costEnvio * 3;
          this.kmextra = 0;
          this.costEnvio = this.costEnvio + this.kmextra;
          this.envioTotal = this.kmextra + this.envio3km;
        }
        this.total = 0;
        this.subTotal = 0;
        console.log(this.carrito);
        this.carrito.map(data=>{
          this.subTotal = this.subTotal + data['precioCarrito'];
        });
        this.total = this.subTotal + this.costEnvio;
      }
      console.log(response);
    });
  }

  loadMapa(){
  
    let $mapa = document.getElementById("mapa3");

     let mapa = new google.maps.Map($mapa,{
      disableDefaultUI: true,
      center: {
        lat: this.coordenadas['lat'],
        lng: this.coordenadas['lng']
      },
      zoom: 14,

      });

      let marker = new google.maps.Marker({
        position: {
          lat: this.coordenadas['lat'],
          lng: this.coordenadas['lng']
        },
        map: mapa,
        animation: google.maps.Animation.DROP
      });

      let ubicacion = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );

      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({'latLng': ubicacion},(results,status)=>{
        if(status == 'OK'){
          console.log(results);  
          this.calle = 
          this.calle+ //Vacio
          results[0].address_components[1].long_name+" "+   //Numero de casa
          results[0].address_components[0].long_name;  //Calle
          this.calleSecundario =
          this.calleSecundario + //Secundario Vacio
          results[0].address_components[2].long_name+", "+       //Colonia
          results[0].address_components[3].long_name;       //Ciudad
         // results[0].address_components[3].long_name+", "+       //Ciudad
         // results[0].address_components[4].short_name;       //Estado
        }
      });
  }

  ubicacion(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ClienteUbicPage,
      cssClass: "ubicacion"
    });
    await modal.present();
    const data = await modal._onDidDismiss();
    console.log(data);
    if(data.data['ubicacion']){
      this.coordenadas['lat'] = data.data['body']['lat'];
      this.coordenadas['lng'] = data.data['body']['lng'];
      this.calle = "";
      this.calleSecundario = "";
      this.callDistancia();
      this.loadMapa();
    }
  }

  pagoCliente(){

    console.log(this.metPago);
    if (this.quienPaga == "cliente"){
      this.flagMetodos=1;
     //this.mostrarTarjetas();
    }else{
      this.flagMetodos=0;
    }
  }

  getMetPago(){

    console.log(this.metPago);
    if (this.metPago == "Pagolinea"){
      this.flagCard=1;
      this.mostrarTarjetas();
    }else{
      this.flagCard=0;
    }
  }

  mostrarTarjetas() {
    //Obtener tarjetas con id de cliente
    this.customerOpenid = {...JSON.parse(localStorage.getItem('userOpen'))};
    let customer_id =  JSON.stringify(this.customerOpenid.id);
    console.log(this.customerOpenid.id);
    return this.http.post("https://localhost:5010/api/card/get",customer_id,httpOptions).subscribe(
      data => {
         console.log("Tarjetas guardadas del cliente");
         this.tarjetas = data;
         console.log(this.tarjetas);
       }, 
    error => {
     console.log(error);
   }); 
  }

  validarDestino(){
    if(this.dest_nombre == '' && this.dest_tel == '' && this.instrucciones == ''&& this.envioTotal == 0) {
      this.presentToast('Todos los campos son obligatorios');
      }else if (this.dest_nombre == ''){
      this.presentToast('Debe capturar el nombre del destino');
      }else if (this.dest_tel == ''){
        this.presentToast('Debe capturar el telefono del destino');
      }else if (this.instrucciones == ''){
        this.presentToast('Debe capturar las instrucciones del pedido');
      }else if (this.envioTotal == 0){
        this.presentToast('Debe capturar la direccion de destino');
      }else{
        this.RealizandoCobro();
      }

  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: "Error: " + mensaje,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  async RealizandoCobro() {
    if (this.metPago == "Pagolinea"){
      this.getCardSelect();
      if(this.cardCobro != ""){
        let loading = await this.loadingCtrl.create({
          content:"Tu pago se esta procesando...",
          duration:5000,
          showBackdrop:false,
          spinner: "lines"
        });
          loading.present();  
          setTimeout(()=>{
            loading.dismiss();
            this.AddCargo();
          },5000)
      }else{
          this.validationCard();
      }  
    }else {
        this.flagCard=0;
        this.pedido();
    }
  }

  getCardSelect(){
    // console.log("tarjeta seleccionada: " + this.tarjetaSelect);
      if (this.tarjetaSelect != "" && this.tarjetaSelect != null  ){
       this.cardCobro= this.tarjetaSelect;
       console.log("tarjeta seleccionada: " + this.tarjetaSelect);
     }else{
       console.log("no se selecciono ninguna tarjeta")
       this.cardCobro="";
     }
     }

     AddCargo(){
      //let customer_id =  JSON.stringify(this.customerCargo.id);
      console.log(this.customerCargo);
      this.ChargeRequest={
        Method: "card",
        SourceId: this.tarjetaSelect,
        Amount:this.total,
        Description: "Pago de servicio - ElEstore",
        DeviceSessionId: this.deviceSessionId,
        CustomerId: this.customerOpenid.id
      }
      console.log(this.ChargeRequest);
  
      return this.http.post("https://localhost:5010/api/charge/add",JSON.stringify(this.ChargeRequest),httpOptions).subscribe(
        data => {
           console.log("Pago realizado con exito");
           console.log(data);
           this.pedido();
         }, 
      error => {
       console.log(error);
     }); 
  
    }

    async pedido(){
      /*aun no se define estructura pedido*/
        this.PedidoProcesado();
      }

      async PedidoProcesado() {
        let loading = await this.loadingCtrl.create({
         content:"Solicitando Repartidor...",
        duration:3000,
        showBackdrop:false,
        spinner: "lines"
      });
        loading.present();  
        setTimeout(()=>{
          loading.dismiss();
          this.alertPedidoSave(); 
        },3000)
  }

  async alertPedidoSave() {
    this.navCtrl.push(InicioPage);
    const alert = await this.alertCtrl.create({
      //header: 'Operacion Exitosa',
      message: 'Hemos recibido tu solicitud de reparto. ¡Gracias por confiar en ElEstore!',
      buttons: [
        {
          text: 'Ver pedido',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm aceptar');
           // this.navCtrl.navigateForward("/pedidos"+ "13");
            
        this.navCtrl.push(PedidosPage);
             }
        },{
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            this.navCtrl.push(InicioPage);
          }
        },
      ]
    });
  
    await alert.present();
  }

  async validationCard() {
    this.getCardSelect();
    const alert = await this.alertCtrl.create({
     // header: 'Informacion',
      message: 'Para continuar debe seleccionar o agregar una tarjeta ',
      buttons: [
        {
          text: 'Agregar nueva tarjeta',
          cssClass: 'secondary',
          handler: () => {
            console.log('agregar');
           //this.navCtrl.navigateForward("/add-card");
          }
        },
        {
          text: 'Seleccionar Tarjeta',
          cssClass: 'secondary',
          handler: () => {
            console.log('seleccionar');
            this.selectRef.open();
          }
        },
      ]
    });

    await alert.present();
  }

  ubicacionDestino(){
    this.presentModal2();

  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: ClienteUbicPage,
      cssClass: "ubicacion"
    });
    await modal.present();
    const data = await modal._onDidDismiss();
    console.log(data);
    if(data.data['ubicacion']){
     // this.coordenadas['lat'] = data.data['body']['lat'];
      //this.coordenadas['lng'] = data.data['body']['lng'];
      this.coordenadasDes['latitud'] = data.data['body']['lat'];
      this.coordenadasDes['longitud'] = data.data['body']['lng'];
      console.log("direccion del destino " + this.coordenadasDes['latitud'] + this.coordenadasDes['longitud'] );
      this.calleDest = "";
      this.calleSecundarioDest = "";
      this.callDistancia();
      this.loadMapaDest();
    }
  }


  loadMapaDest(){
  
    let $mapa = document.getElementById("mapa3");
 
      let mapa = new google.maps.Map($mapa,{
       disableDefaultUI: true,
       center: {
         lat: this.coordenadasDes['latitud'],
         lng: this.coordenadasDes['longitud']
       },
       zoom: 14,
 
       });
 
       let marker = new google.maps.Marker({
         position: {
           lat: this.coordenadasDes['latitud'],
           lng: this.coordenadasDes['longitud']
         },
         map: mapa,
         animation: google.maps.Animation.DROP
       });
 
       let ubicacion = new google.maps.LatLng(this.coordenadasDes['latitud'], this.coordenadasDes['longitud'] );
 
       let geocoder = new google.maps.Geocoder();
       geocoder.geocode({'latLng': ubicacion},(results,status)=>{
         if(status == 'OK'){
           console.log(results);  
           this.calleDest = 
           this.calleDest+ //Vacio
           results[0].address_components[1].long_name+" "+   //Numero de casa
           results[0].address_components[0].long_name;  //Calle
           this.calleSecundarioDest =
           this.calleSecundarioDest + //Secundario Vacio
           results[0].address_components[2].long_name+", "+       //Colonia
           results[0].address_components[3].long_name+", "+       //Ciudad
           results[0].address_components[4].short_name;       //Estado
         }
       });
 
   }

  
}
