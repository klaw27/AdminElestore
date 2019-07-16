import { CatNegocio, SubCatNegocio } from './../../models/model';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { User, Negocio } from '../../models/model';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { Geolocation } from '@ionic-native/geolocation';
import { convertFormatToKey } from 'ionic-angular/umd/util/datetime-util';
import { NegocioDetallePage } from '../negocio-detalle/negocio-detalle';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { InicioPage } from '../inicio/inicio';

declare function escape(s:string): string;

// @IonicPage()
@Component({
  selector: 'page-nuevonegocio',
  templateUrl: 'nuevonegocio.html',
})
export class NuevonegocioPage {
  userModel: User = new User();
  catnegocio: CatNegocio[];
  subcatnegocio: SubCatNegocio[];

  toast:any;

  // bypassSecurityTrustResourceUrl

  fotografia:any;
  fotografia2:any;

  negocio: Negocio = new Negocio();
  formGroup: FormGroup;

  nombre:AbstractControl;
  callenumero:AbstractControl;
  colonia: AbstractControl;
  ciudad: AbstractControl
  estado: AbstractControl;
  codigopostal: AbstractControl;
  horaapertura:AbstractControl;
  horacierre:AbstractControl;
  categoria:AbstractControl;
  FK_subcategoria:AbstractControl;
  descripcion:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
            public api: ElstorapiProvider,
            public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastController: ToastController,
              private geolocation: Geolocation,
              private camera: Camera,
              public actionSheetCtrl: ActionSheetController,
              private storage: Storage,
              private _sanitizer: DomSanitizer) {

    this.formGroup = formBuilder.group({
      nombre: ['',[Validators.required]],
      callenumero:['', [Validators.required]],
      colonia:['', [Validators.required]],
      ciudad:['', [Validators.required]],
      estado:['', [Validators.required]],
      codigopostal:['', [Validators.required,Validators.maxLength(5)]],
      horaapertura:['', [Validators.required]],
      horacierre:['', [Validators.required]],
      categoria:['', [Validators.required]],
      FK_subcategoria:['', [Validators.required]],
      descripcion:['', [Validators.required]]
      });

      this.nombre = this.formGroup.controls['nombre'];
      this.callenumero = this.formGroup.controls['callenumero'];
      this.colonia = this.formGroup.controls['colonia'];
      this.ciudad = this.formGroup.controls['ciudad'];
      this.estado = this.formGroup.controls['estado'];
      this.codigopostal = this.formGroup.controls['codigopostal'];
      this.horaapertura = this.formGroup.controls['horaapertura'];
      this.horacierre = this.formGroup.controls['horacierre'];
      this.categoria = this.formGroup.controls['categoria'];
      this.FK_subcategoria = this.formGroup.controls['FK_subcategoria'];
      this.descripcion = this.formGroup.controls['descripcion'];

    this.userModel =  navParams.get('item');

  }


  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.getCatNegocio();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarNegocio($event, biz, clientid)
  {
    biz.fotografia= this.negocio.fotografia;
    biz.fotografia2 = this.negocio.fotografia2;
    biz.clientid = this.userModel.clientid;

    debugger
    let message:string = "Agregando negocio..";
    let loader = this.loadingCtrl.create({
      content: message
    });

    this.toast = this.toastController.create({
      message: 'Connection error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    

    let alert = this.alertCtrl.create({
      title: 'Negocio Agregado',
      subTitle: 'Negocio Agregado correctamente!',
      buttons: [{
        text: 'Ok',
      handler: () => {

        this.userModel.negocio.push(biz);

        this.storage.remove('usuario');
        this.storage.set('usuario',this.userModel);

        this.navCtrl.push(NegocioDetallePage,{item:this.userModel});
      }
    }]
    });

    loader.present().then(() => {

      this.geolocation.getCurrentPosition().then((resp) => {
        this.negocio.latitud = resp.coords.latitude.toString();
        this.negocio.longitud = resp.coords.longitude.toString();


        this.api.agregarNegocio(biz).subscribe(
          (data: any) => {
          if(data !== null || data === 1)
            {
                alert.present().then(() => {
                  loader.dismiss();
                });

            }
          else
          {
              this.toast.present().then(() => {
                  this.toast.dismiss();
                  loader.dismiss();
              });
          }
          },
           (error: any) => {
            loader.dismiss();
           });
           

       }).catch((error) => {
         console.log('Error getting location', error);
         loader.dismiss();
       });

    });
  }
  cancelar()
  {
    this.navCtrl.pop();
  }


  getCatNegocio()
  {
    let loader = this.loadingCtrl.create({
      content: 'Obteniendo categorias...'
    });

    this.toast = this.toastController.create({
      message: 'Error obteniendo categorias...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    loader.present().then(() => {
      this.api.getCatNegocio().subscribe(
        (data: CatNegocio[]) => {
        if(data !== null)
          {
            //
             this.catnegocio = data;
             loader.dismiss();
          }
        else
        {
            this.toast.present().then(() => {
                this.toast.dismiss();
                loader.dismiss();
            });
        }
        },
         (error: any) => {
          this.toast = this.toastController.create({
            message: error,
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Ok'
          });
           
          loader.dismiss();
            this.toast.onDidDismiss(() => {
              
            });
            this.toast.present().then(() => {
                
              });
         });
       
    });
  }

  getSubCatNegocio($event, cat)
  {
    let id_CatNegocio = cat.id_catNegocio;
    
    let loader = this.loadingCtrl.create({
      content: 'Obteniendo subcategorias...'
    });

     this.toast = this.toastController.create({
      message: 'Error obteniendo subcategorias...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    loader.present().then(() => {
      this.api.getSubCatNegocio(id_CatNegocio).subscribe(
        (data: SubCatNegocio[]) => {
        if(data !== null)
          {
            loader.dismiss();
            this.subcatnegocio = data;
          }
        else
        {
            this.toast.present().then(() => {
                this.toast.dismiss();
                loader.dismiss();
            });
        }
        },
         (error: any) => {
          this.toast = this.toastController.create({
            message: error,
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Ok'
          });
           loader.dismiss();
              
            this.toast.onDidDismiss(() => {
              
            });
            this.toast.present().then(() => {
                
              });
         });
         
    });
  }
  subCatChange($event, cat)
  {

  }

  catChange($event, subcat)
  {

  }

  capturarFotoLogo(source:any)
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

    this.camera.getPicture(options).
    then((imageData) => 
    {
      imageData = escape(imageData);
      this.negocio.fotografia2 = 'data:image/jpeg;base64,'+imageData;
      this.fotografia2 = this._sanitizer.bypassSecurityTrustUrl(`${this.negocio.fotografia2}`);

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

  capturarFotoBanner(source:any)
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
    .then((imageData) => {
      
      imageData = escape(imageData);
      this.negocio.fotografia = 'data:image/jpeg;base64,'+imageData;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.negocio.fotografia}`);
    
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

  public presentActionSheetBanner() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Abrir galeria',
          icon: 'images',
          handler: () => {
            this.capturarFotoBanner(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camera',
          icon: 'camera',
          handler: () => {
            this.capturarFotoBanner(this.camera.PictureSourceType.CAMERA);
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

  public presentActionSheetLogo() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Abrir galeria',
          handler: () => {
            this.capturarFotoLogo(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camera',
          handler: () => {
            this.capturarFotoLogo(this.camera.PictureSourceType.CAMERA);
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

  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }

  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
  back()
  {
    this.navCtrl.push(InicioPage, {item:this.userModel});
  }
}
