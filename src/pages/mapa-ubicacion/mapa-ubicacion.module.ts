import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaUbicacionPage } from './mapa-ubicacion';

@NgModule({
  declarations: [
    MapaUbicacionPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaUbicacionPage),
  ],
})
export class MapaUbicacionPageModule {}
