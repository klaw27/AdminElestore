import { InicioPage } from './../inicio/inicio';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/model';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

declare function escape(s:string): string;

// @IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

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
  isDisabled: boolean = true;

  // base64:any ='data:image/jpeg;base64,' ;
  // imgSource:any  = '/assets/imgs/user.png';
  // cameraImg:any = null;

  fotografia:any;

  toast:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public toastController: ToastController,
    public camera: Camera,
    private _sanitizer: DomSanitizer,
    public actionSheetCtrl: ActionSheetController,
    public storage: Storage,
    public loadingCtrl: LoadingController)
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

      this.userModel =  navParams.get('item');

  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.userModel.fotografia}`);
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  editarPerfil()
  {
      this.isDisabled = !this.isDisabled;
  }

  guardarCambios($event, usr)
  {
    this.userModel = usr;
    // this.userModel.fotografia = this.imgSource;

    this.toast = this.toastController.create({
      message: 'Connection error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    let alert = this.alertCtrl.create({
      title: 'Perfil Actualizado',
      subTitle: 'Perfil Actualizado correctamente!',
      buttons: ['Dismiss']
    });



    let loader = this.loadingCtrl.create({
      content: 'Actualizando perfil...'
    });


    loader.present().then(() => {
      this.api.actualizarCuenta(this.userModel).subscribe(
        (data: User) => {
           if(data.toString()=== '0')
           {
              this.toast.present().then(() =>{
                this.toast.dismiss();
              });
           }
           if(data.toString() === '1')
           {
            alert.present().then(() => {
                this.navCtrl.push(InicioPage, {item:this.userModel})
                this.remove('usuario').then(() => {
                    this.set('usuario', this.userModel).then(() => {
                      this.navCtrl.push(InicioPage,{item:this.userModel})
                      loader.dismiss();
                    });
                    
                });
            });
           }
           loader.dismiss();
        },
         (error: any) => {
          this.toast = this.toastController.create({
            message: error,
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Ok'
          });
           
              
            this.toast.onDidDismiss(() => {
              
            });
            this.toast.present().then(() => {
                
              });
         });  
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
      this.userModel.fotografia = 'data:image/jpg;base64,'+imageData;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.userModel.fotografia}`);

     }, (err) => {
      this.toast = this.toastController.create({
        message: err,
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
       
          
        this.toast.onDidDismiss(() => {
          
        });
        this.toast.present().then(() => {
            
          });
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

  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }
}
