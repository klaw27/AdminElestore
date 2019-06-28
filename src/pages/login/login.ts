import { RecuperarcuentaPage } from './../recuperarcuenta/recuperarcuenta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
import { InicioPage } from '../inicio/inicio';
import { User } from '../../models/model';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { timeInterval } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userModel: User = new User();
  formGroup: FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  imgSource:any  = '/assets/imgs/user.png';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public api: ElstorapiProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastController: ToastController,
              public storage: Storage) {

                this.formGroup = formBuilder.group({
                  email: ['',[Validators.required, Validators.email]],
                password:['', [Validators.required, Validators.minLength(8)]]
                });

                this.email = this.formGroup.controls['email'];
                this.password = this.formGroup.controls['password'];
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  iniciarSesion($event, usr)
  {
    let title = '';
    let subTitle = '';
    this.userModel = usr;

    let loader = this.loadingCtrl.create({
      content: 'Iniciando sesion...'
    });

    loader.present().then(() => {

      this.api.inicarSesion(usr).subscribe(
        (data: User) => {

          switch(data)
          {
            case undefined:
              title = 'Ocurrio un error';
              subTitle = 'Usuario/password incorrecto';
              break;
              case null:
                  title = 'Ocurrio un error';
                  subTitle = 'Revise su conexion a internet!';
                break;
                default:
                  if(data[0] === undefined)
                  {
                    title = 'Ocurrio un error';
                    subTitle = 'Usuario no registrado!';
                  }
                  else{
                    title = 'Bienvenido';
                    subTitle = 'Bienvenido ' + data[0].nombreUsuario;
                  }
                break;
          }
          
          let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
              text: 'Ok',
            handler: () => {
                if(
                  data !== null &&
                  data !== undefined)
                {
                  this.set('usuario',data[0]);

                  let loader = this.loadingCtrl.create({
                    content: 'Iniciando sesion...'
                  });
                  loader.present().then(() => {
                    loader.dismiss();
                    this.navCtrl.push(InicioPage, {item:data[0]});
                  });
                }
                else
                {
                  loader.dismiss();
                }
            }
          }]
          });

            alert.present().then(() => {
              loader.dismiss();
            });
        },
         (error: any) => {
          title = 'Ocurrio un Error'
          subTitle = error
          }
          );
         //loader.dismiss();
    });
  }

  recuperarCuenta()
  {
    this.navCtrl.push(RecuperarcuentaPage)
  }

  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }
}
