import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
declare var google;

/**
 * Generated class for the MapaUbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-ubicacion',
  templateUrl: 'mapa-ubicacion.html',
})
export class MapaUbicacionPage {

  mapa:any;
  marker:any;
  locacion:any;
  calle = "";
  ubicacion:any;
  load =  false;

  constructor(public navCtrl: NavController, public navParamas: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaUbicacionPage');
    this.locacion = this.navParamas.data.location;
    this.loadmap();
    console.log(this.mapa);
  }


  loadmap(){
    let $mapa = document.getElementById("mapa2");
    console.log($mapa);

     this.mapa = new google.maps.Map($mapa,{
      disableDefaultUI: true,
      center: {
        lat: this.locacion.lat(),
        lng: this.locacion.lng()
      },
      zoom: 18,

      });

      this.marker = new google.maps.Marker({
        position: {
          lat: this.locacion.lat(),
          lng: this.locacion.lng()
        },
        map: this.mapa,
        draggable: true,
        animation: google.maps.Animation.DROP
      });

      var infowindow = new google.maps.InfoWindow({
        content: "Arrastrame o da click en el mapa!"
      });

      infowindow.open(this.mapa, this.marker);

      let geocoder = new google.maps.Geocoder();

      let nombreUbic = geocoder.geocode({'latLng': this.locacion},(results,status)=>{
        if(status == 'OK'){
          this.ubicacion = this.locacion;
          this.calle = this.calle+""+results[0].address_components[1].long_name+" "+results[0].address_components[0].long_name+", "+results[0].address_components[2].long_name;
        }
      });

      this.mapa.addListener("click", event=>{
        console.log(event.latLng);
        this.mapa.panTo(event.latLng);
        this.marker.setPosition(event.latLng);
        geocoder.geocode({ 'latLng': event.latLng }, (results, status)=> {
          if(status == 'OK'){
            this.calle = "";
            this.ubicacion = event.latLng;
            this.calle = this.calle+""+results[0].address_components[1].long_name+" "+results[0].address_components[0].long_name+", "+results[0].address_components[2].long_name;
          }
        });
      });

      this.marker.addListener("dragend", event=>{
        geocoder.geocode({ 'latLng': event.latLng }, (results, status)=> {
          if(status == 'OK'){
            this.calle = "";
            this.ubicacion = event.latLng;
            this.calle = this.calle+""+results[0].address_components[1].long_name+" "+results[0].address_components[0].long_name+", "+results[0].address_components[2].long_name;
          }
        });
        this.mapa.panTo(this.marker.getPosition());
        console.log(this.mapa.getBounds());

      });


    }

    guardar(){
      let body = {
        lat: this.ubicacion.lat(),
        lng: this.ubicacion.lng(),
        calle: this.calle,
      }

      this.load = true;

          this.modalCtrl.create({
            ubicacion: true,
            body: body
          });

      this.load = false;
    }

}
