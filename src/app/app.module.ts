import { PedidosNoEntregadosPage } from './../pages/pedidos-no-entregados/pedidos-no-entregados';
import { NegocioDetalleEditarPage } from './../pages/negocio-detalle-editar/negocio-detalle-editar';
import { MapPage } from './../pages/map/map';
import { NegocioAgregarProductoPage } from './../pages/negocio-agregar-producto/negocio-agregar-producto';
import { NegocioDetallePage } from './../pages/negocio-detalle/negocio-detalle';
import { NuevonegocioPage } from './../pages/nuevonegocio/nuevonegocio';
import { NegociosPage } from '../pages/negocios/negocios';
import { InicioPage } from './../pages/inicio/inicio';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AgmCoreModule} from '@agm/core';
import { Navbar } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RecuperarcuentaPage } from '../pages/recuperarcuenta/recuperarcuenta';
import { ElstorapiProvider } from '../providers/elstorapi/elstorapi';
import { ConfirmEqualValidatorDirective } from '../shared/password-validator';
import { PerfilPage } from '../pages/perfil/perfil';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PedidosTodosPage } from '../pages/pedidos-todos/pedidos-todos';
import { PedidosEntregadosPage } from '../pages/pedidos-entregados/pedidos-entregados';
import { ModalPedidoPage } from '../pages/modal-pedido/modal-pedido';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { fireBaseConfig } from '../config';
import { IonicStorageModule } from '@ionic/storage';
import { NegocioEditarProductoPage } from '../pages/negocio-editar-producto/negocio-editar-producto';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RecuperarcuentaPage,
    ConfirmEqualValidatorDirective,
    InicioPage,
    NegociosPage,
    PerfilPage,
    PedidosPage,
    NuevonegocioPage,
    NegocioDetallePage,
    NegocioAgregarProductoPage,
    MapPage,
    NegocioDetalleEditarPage,
    PedidosTodosPage,
    PedidosEntregadosPage,
    PedidosNoEntregadosPage,
    ModalPedidoPage,
    NegocioEditarProductoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey : 'AIzaSyC49V2M_OYaf8GfKsXN6_Nk-pf50Y5ulcA'}),
    AngularFireModule.initializeApp(fireBaseConfig.fire),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RecuperarcuentaPage,
    InicioPage,
    NegociosPage,
    PerfilPage,
    PedidosPage,
    NuevonegocioPage,
    NegocioDetallePage,
    NegocioAgregarProductoPage,
    MapPage,
    NegocioDetalleEditarPage,
    PedidosTodosPage,
    PedidosEntregadosPage,
    PedidosNoEntregadosPage,
    ModalPedidoPage,
    NegocioEditarProductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ElstorapiProvider,
    Geolocation,
    Camera,
    AngularFireDatabase
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
