import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubCatNegocio, Negocio, CatNegocio, User } from '../../models/model';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { NegociosPage } from '../negocios/negocios';
import { Geolocation } from '@ionic-native/geolocation';
import { DomSanitizer } from '@angular/platform-browser';
import { NegocioDetallePage } from '../negocio-detalle/negocio-detalle';
import { Storage } from '@ionic/storage';

declare function escape(s:string): string;

// @IonicPage()
@Component({
  selector: 'page-negocio-detalle-editar',
  templateUrl: 'negocio-detalle-editar.html',
})
export class NegocioDetalleEditarPage {

  userModel: User = new User();
  catnegocio: CatNegocio[];
  subcatnegocio: SubCatNegocio[];
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
  subcategoria:AbstractControl;
  descripcion:AbstractControl;

  fotografia:any;
  fotografia2:any;
  

  editar: boolean = true;

  toast:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public geolocation: Geolocation,
    public camera: Camera,
    private _sanitizer: DomSanitizer,
    private actionSheetCtrl: ActionSheetController,
    private storage: Storage) {

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
      subcategoria:['', [Validators.required]],
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
      this.subcategoria = this.formGroup.controls['subcategoria'];
      this.descripcion = this.formGroup.controls['descripcion'];


      this.userModel =  navParams.get('item');

      this.negocio =  this.userModel.negocio[0];

  }

  ionViewDidLoad() {}
  ionViewWillEnter(){

    this.fotografia = this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,'+`${this.userModel.negocio[0].fotografia}`);
    this.fotografia2 = this._sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,'+`${this.userModel.negocio[0].fotografia2}`);

    this.getCatNegocio();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  guardarNegocio($event, biz, clientid)
  {
    let strclientid = this.negocio.clientid;
    this.negocio = biz;
    this.negocio.clientid = strclientid;
    
    // this.negocio.fotografia = this.fotografia;
    // this.negocio.fotografia2 = this.fotografia2;


    let message:string = "Editando negocio..";
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
      title: 'Negocio Editado',
      subTitle: 'Negocio Editado correctamente!',
      buttons: [{
        text: 'Ok',
      handler: () => {
        
        this.userModel.negocio[0] = this.negocio;
        this.remove('usuario').then(() =>{
          this.set('usuario',this.userModel);
        });

        this.navCtrl.push(NegocioDetallePage, {item:this.userModel});
      }
    }]
    });

    loader.present().then(() => {

      this.geolocation.getCurrentPosition().then((resp) => {
        this.negocio.latitud = resp.coords.latitude.toString();
        this.negocio.longitud = resp.coords.longitude.toString();

        this.api.editarNegocio(this.negocio).subscribe(
          (data: Negocio) => {
          if(data.toString() ==="1")
            {
                alert.present().then(() => {
                    loader.dismiss();
                });

            }
          else
          {
              this.toast.present().then(() => {
                loader.dismiss();
                  this.toast.dismiss();
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

       }).catch((error) => {
         
         loader.dismiss();

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

    this.camera.getPicture(options)
    .then((imageData) => 
    {
      imageData = escape(imageData);
      this.negocio.fotografia2 = 'data:image/jpeg;base64,'+imageData;
      this.fotografia2 = this._sanitizer.bypassSecurityTrustResourceUrl(`${this.userModel.negocio[0].fotografia2}`);
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
      this.negocio.fotografia = 'data:image/jpeg;base64,'+ imageData;
      this.fotografia = this._sanitizer.bypassSecurityTrustResourceUrl(`${this.userModel.negocio[0].fotografia}`);
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
  editarNegocio()
  {
      this.editar = !this.editar;
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
             this.catnegocio = data;
             loader.dismiss();
          }
        else
        {
            this.toast.present().then(() => {
                this.toast.dismiss();
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
            //
            this.subcatnegocio = data;
          }
        else
        {
            this.toast.present().then(() => {
                this.toast.dismiss();
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
           
              
            this.toast.onDidDismiss(() => {
              
            });
            this.toast.present().then(() => {
                
              });
         });
         loader.dismiss();
    });
  }


  public presentActionSheetBanner() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Abrir galeria',
          handler: () => {
            this.capturarFotoBanner(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camera',
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

  someFunc(e, $event){
    
  }

  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }

  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
}
