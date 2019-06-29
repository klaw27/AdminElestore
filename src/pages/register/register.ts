import { InicioPage } from '../inicio/inicio';
import { Component } from '@angular/core';
import {  NavController,ActionSheetController, NavParams, AlertController, Toast, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/model';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

declare function escape(s:string): string;

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

  fotografia:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public api: ElstorapiProvider,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private _sanitizer: DomSanitizer)
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
    usr.fotografia = this.userModel.fotografia;
    debugger
    // this.userModel = usr;
    // this.userModel.fotografia = this.cameraImg;


    let loaderReg = this.loadingCtrl.create({
      content: 'Registrando usuario...'
    });

    loaderReg.present().then(() => {
      this.api.registrarUsuario(usr).subscribe(
      
        (data: any) => {
          
          loaderReg.dismiss();

  
               switch(data){
                 case true:
                  title = 'Correo registrado exitosamente!'
                  subTitle = 'Bienvenido'
                   break;
                   case false:
                     title =  'Ocurrio un error'
                     subTitle =  'Ocurrio un error'
                     break;
                     default:
                       if(data === null){
                        title =  'Ocurrio un error'
                        subTitle =  'Ya existe una cuenta asociada al correo electrònico ' + this.userModel.email
                       }
                       break;
               }

  
          let loader = this.loadingCtrl.create({
            content: 'Iniciando sesion...'
          });
  
  
          let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                text: 'Ok',
              handler: () => {
                
                  if(data === true)
                  {
                      loader.present().then(() => {
                        loader.dismiss();
                      this.navCtrl.push(InicioPage, {item:this.userModel});
                      
                    });
                  }
                  else{
                    loader.dismiss();
                  }
              }
            }]
          });
  
          alert.present().then(() => {
  
          });
        },
         (error: any) => {
           
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
      quality : 100,
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : source,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options)
    .then((imageData) => 
    {
      imageData = escape(imageData);
      this.userModel.fotografia = 'data:image/jpeg;base64,'+imageData;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.userModel.fotografia}`);
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
