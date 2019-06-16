import { InicioPage } from '../inicio/inicio';
import { Component } from '@angular/core';
import {  NavController,ActionSheetController, NavParams, AlertController, Toast, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/model';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Camera , CameraOptions} from '@ionic-native/camera';

// @IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userModel: User = new User();
  formGroup: FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  nombre: AbstractControl;
  apellidoPaterno: AbstractControl
  apellidoMaterno: AbstractControl;
  nombreUsuario:AbstractControl;
  confirmPassword:AbstractControl;
  numeroTelefonico:AbstractControl;

  imgSource:any  = '/assets/imgs/user.png';
  base64:any = 'data:image/jpeg;base64,'; 
  cameraImg:any = null;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public api: ElstorapiProvider,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController)
    {
      this.formGroup = formBuilder.group({
        email: ['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      nombre:['', [Validators.required]],
      apellidoPaterno:['', [Validators.required]],
      apellidoMaterno:['', [Validators.required]],
      nombreUsuario:['', [Validators.required]],
      confirmPassword:['', [Validators.required]],
      numeroTelefonico:['', [Validators.required]]
      });

      this.email = this.formGroup.controls['email'];
      this.password = this.formGroup.controls['password'];
      this.nombre = this.formGroup.controls['nombre'];
      this.apellidoPaterno = this.formGroup.controls['apellidoPaterno'];
      this.apellidoMaterno = this.formGroup.controls['apellidoMaterno'];
      this.nombreUsuario = this.formGroup.controls['nombreUsuario'];
      this.confirmPassword = this.formGroup.controls['confirmPassword'];
      this.numeroTelefonico = this.formGroup.controls['numeroTelefonico'];
  }


  ionViewDidLoad() {}
  ionViewWillEnter(){

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  crearCuenta($event, usr)
  {
    let title = '';
    let subTitle = '';
    this.userModel = usr;
    this.userModel.fotografia = this.cameraImg;


    let loaderReg = this.loadingCtrl.create({
      content: 'Registrando usuario...'
    });

    loaderReg.present().then(() => {
      this.api.registrarUsuario(usr).subscribe(
      
        (data: any) => {
          
          loaderReg.dismiss();
          
          // title = data !== null? 'Confirmar correo':
          //         data === null? 'El correo ya esta registrado':
          //                                   'Ocurrio un error';
  
          // subTitle = data !== null? `Necesitas confirmar tu correo! 
          //                           Se ha enviado un mensaje al correo que registraste`:
          //           data === null? 'Ya existe una cuenta asociada al correo electrònico ' + this.userModel.email :
          //                                     data.toString();
  
               
          title = data !== null? 'Correo registrado exitosamente!':
                  data === null? 'El correo ya esta registrado':
                                            'Ocurrio un error';
  
          subTitle = data !== null? `'Correo registrado exitosamente! 
                                    Bienvenido`:
                    data === null? 'Ya existe una cuenta asociada al correo electrònico ' + this.userModel.email :
                                              data.toString();
  
          let loader = this.loadingCtrl.create({
            content: 'Iniciando sesion...'
          });
  
  
          let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                text: 'Ok',
              handler: () => {
                debugger;
                  if(data === true)
                  {
                    debugger
                      loader.present().then(() => {
                      this.navCtrl.push(InicioPage, {item:this.userModel});
                      loader.dismiss();
                    });
                  }
                  loader.dismiss();
              }
            }]
          });
  
          alert.present().then(() => {
  
          });
        },
         (error: any) => {
           <any>error
          }
        );
    });
  }

  cancelar()
  {
    this.navCtrl.pop();
  }

  capturarFoto(source:any)
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:source
    }

    this.camera.getPicture(options).then((imageData) => {

      this.imgSource = this.base64 + imageData;
      this.cameraImg = this.base64 + imageData;
      
      // if(this.cameraImg !== null)
      // {
      //   this.imgSource = this.base64 + imageData;
      //   this.cameraImg = this.base64 + imageData;
      // }
      
     }, (err) => {
      // Handle error
     });

  }


  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Abrir galeria',
          handler: () => {
            this.capturarFoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camera',
          handler: () => {
            this.capturarFoto(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
}
