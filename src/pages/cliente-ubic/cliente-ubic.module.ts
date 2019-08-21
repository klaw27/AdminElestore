import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteUbicPage } from './cliente-ubic';

@NgModule({
  declarations: [
    ClienteUbicPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteUbicPage),
  ],
})
export class ClienteUbicPageModule {}
