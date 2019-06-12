import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubCatNegocio, Negocio, CatNegocio, User } from '../../models/model';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { NegociosPage } from '../negocios/negocios';
import { Geolocation } from '@ionic-native/geolocation';
import { DomSanitizer } from '@angular/platform-browser';


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
  FK_subcategoria:AbstractControl;
  descripcion:AbstractControl;

  // imgSourceLogo:any  = '/assets/imgs/tienda-online-icono-png.png';
  // imgSourceBanner:any  = '/assets/imgs/tienda-online-icono-png.png';

  imgSourceBanner:any  = '/assets/imgs/banner.jpg';
  imgSourceLogo:any  = '/assets/imgs/toks.png';

  base64:string = 'data:image/jpeg;base64,';
  cameraImgLogo:any = null;
  cameraImgBanner:any = null;

  editar: boolean = true;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public geolocation: Geolocation,
    public camera: Camera,
    private _sanitizer: DomSanitizer,
    private actionSheetCtrl: ActionSheetController) {

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


      this.negocio =  navParams.get('item');

      //Banner
      this.negocio.fotografia =   this.negocio.fotografia !== '/assets/imgs/banner.jpg' ? 
      this._sanitizer.bypassSecurityTrustResourceUrl(this.negocio.fotografia): this.imgSourceBanner;

        //Logo
        this.negocio.fotografia2 =   this.negocio.fotografia2 !== '/assets/imgs/toks.png' ? 
        this._sanitizer.bypassSecurityTrustResourceUrl(this.negocio.fotografia2): this.imgSourceLogo;

  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.getCatNegocio();

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  guardarNegocio($event, biz, clientid)
  {
    let strclientid = this.negocio.clientid;
    this.negocio = biz;
    this.negocio.clientid = strclientid;


    let message:string = "Agregando negocio..";
    let loader = this.loadingCtrl.create({
      content: message
    });

    const toast = this.toastController.create({
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

        this.navCtrl.push(NegociosPage, {item:this.negocio});
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

                });

            }
          else
          {
              toast.present().then(() => {
                  toast.dismiss();
              });
          }
          },
           (error: any) => console.log(error));
           loader.dismiss();

       }).catch((error) => {
         console.log('Error getting location', error);
         loader.dismiss();
       });

    });
  }


  capturarFotoLogo(source:any)
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      sourceType:source
    }

    this.camera.getPicture(options).then((imageData) => {

      this.cameraImgLogo = imageData;

      if(this.cameraImgLogo !== null)
      {
        this.imgSourceLogo = this.base64 + imageData;
        this.cameraImgLogo = this.base64 + imageData;
      }
     }, (err) => {
      // Handle error
     });

  }

  capturarFotoBanner(source:any)
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      sourceType:source,
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.cameraImgBanner =  imageData;;
      
      if(this.cameraImgBanner !== null)
      {
        this.imgSourceBanner = this.base64 + imageData;
        this.cameraImgBanner =  this.base64 + imageData;;
      }

     }, (err) => {
      // Handle error
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
      content: ''
    });

    const toast = this.toastController.create({
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
          }
        else
        {
            toast.present().then(() => {
                toast.dismiss();
            });
        }
        },
         (error: any) => console.log(error));
         loader.dismiss();
    });
  }

  getSubCatNegocio($event, cat)
  {
    let id_CatNegocio = cat.id_catNegocio;
    
    let loader = this.loadingCtrl.create({
      content: ''
    });

    const toast = this.toastController.create({
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
            toast.present().then(() => {
                toast.dismiss();
            });
        }
        },
         (error: any) => console.log(error));
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
}
