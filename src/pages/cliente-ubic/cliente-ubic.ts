import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/';
import { MapaUbicacionPage } from '../mapa-ubicacion/mapa-ubicacion';
import { entrada } from '../../app/animaciones/entrada';
import { salida } from '../../app/animaciones/salida';
declare var google;
/**
 * Generated class for the ClienteUbicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-ubic',
  templateUrl: 'cliente-ubic.html',
})
export class ClienteUbicPage {
  currentLatitud:any;
  currentLongitud:any;
  mapa:any;
  marker:any;
  query = "";
  lugares:[] = [];
  controlTiempo:any
  search:any;
  lugarPosition:any;
  load:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation, 
    private chRef: ChangeDetectorRef,
    public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteUbicPage');
    this.search = new google.maps.places.AutocompleteService();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLatitud = resp.coords.latitude;
      this.currentLongitud = resp.coords.longitude;
      this.loadmap();
      this.load = true;
      this.chRef.detectChanges();          
      console.log(this.mapa);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  loadmap(){
    let $mapa = document.getElementById("mapa");

     this.mapa = new google.maps.Map($mapa,{
      disableDefaultUI: true,
      center: {
        lat: this.currentLatitud,
        lng: this.currentLongitud
      },
      zoom: 18,

      });

      this.marker = new google.maps.Marker({
        position: {
          lat: this.currentLatitud,
          lng: this.currentLongitud
        },
        map: this.mapa,
        draggable: true,
        animation: google.maps.Animation.DROP
      });

      let geocoder = new google.maps.Geocoder();

      this.mapa.addListener("click", event=>{
        console.log(event.latLng);
        this.mapa.panTo(event.latLng);
        this.marker.setPosition(event.latLng);
        geocoder.geocode({ 'latLng': event.latLng }, function(results, status) {
          console.log(results);
          console.log(status);
        });
      });

      this.marker.addListener("dragend", event=>{
        geocoder.geocode({ 'latLng': event.latLng }, function(results, status) {
          console.log(results);
          console.log(status);
        });
        this.mapa.panTo(this.marker.getPosition());
        console.log(this.mapa.getBounds());

      });


    }

    updateSearchResults(){
      if (this.query == '') {
        this.lugares = [];
        return;
      }

      clearTimeout(this.controlTiempo);
      this.controlTiempo = setTimeout(() => {

      this.search.getPlacePredictions({ 
        input: this.query,
        bounds: this.mapa.getBounds()
      },
      (predictions, status) => {
        if(status == "OK"){
            this.lugares = predictions;
            this.chRef.detectChanges();          
          

        }
        else{
          this.lugares = [];
        }
      });
        
      }, 600);
   
    }

    lugarMapa(id){
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({'placeId' : id},(results, status)=>{
        if(status == "OK"){
          this.lugarPosition = results[0].geometry.location;
          this.presentModal();
          
    
        }
        
      });
    }

    customTB(index, item){
      return `${index}-${item.id}`;
    }

    ubicacion(){
      this.presentModal();
  
    }
  
    async presentModal() {
      const modal = await this.modalController.create({
        component: MapaUbicacionPage,
        cssClass: "modal",
        showBackdrop: false,
        enterAnimation: entrada,
        leaveAnimation: salida,
        componentProps: {
          location: this.lugarPosition
        }
      });
      await modal.present();
      
      const data = await modal._onDidDismiss();
      console.log(data);
      if(data.data['ubicacion']){
        this.modalController.create({
          ubicacion: true,
          body: data.data['body']
        });
      }
    }

}
