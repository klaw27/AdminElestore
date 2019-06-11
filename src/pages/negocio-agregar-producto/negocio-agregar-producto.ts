import { NegocioDetallePage } from './../negocio-detalle/negocio-detalle';
import { Producto } from './../../models/model';
import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Negocio } from '../../models/model';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';

// @IonicPage()
@Component({
  selector: 'page-negocio-agregar-producto',
  templateUrl: 'negocio-agregar-producto.html',
})
export class NegocioAgregarProductoPage {

  public negocioModel: Negocio = new Negocio();
  public producto: Producto = new  Producto();
  imgSource:any  = '/assets/imgs/producto.png';
  formGroup: FormGroup;

  platillo:AbstractControl;
  precio:AbstractControl;
  descripcion: AbstractControl;
  foto:AbstractControl;
  cantidad: AbstractControl;

  editar: boolean = false;
  cameraImg:any = null;
  base64:any = 'data:image/jpeg;base64,'; 

  constructor(public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public camera: Camera,
    public navParams: NavParams,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {

      this.formGroup = formBuilder.group({
        platillo: ['',[Validators.required]],
        descripcion:['', [Validators.required]],
        precio:['', [Validators.required]],
        cantidad:['', [Validators.required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];

      this.negocioModel =  navParams.get('item');
      this.producto.negocioid = this.negocioModel.clientid;
  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarProducto(prod, biz, $event)
  {
    const toast = this.toastController.create({
      message: 'Ocurrio un error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    let alert = this.alertCtrl.create({
      title: 'Producto Agregado',
      subTitle: 'Producto Agregado correctamente!',
      buttons: [{
        text: 'Ok',
      handler: () => {
        this.navCtrl.push(NegocioDetallePage, {item:this.negocioModel});
      }
    }]
    });

    // console.log(prod,biz)
    this.api.agregarProducto(prod).subscribe(
      (data: Producto) => {
      if(data !== null)
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
  }

  cancelar()
  {
    this.navCtrl.pop();
  }

  capturarFotoProducto(source:any)
  {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:source,
      targetHeight: 500,
      targetWidth: 500
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraImg =  imageData;;
      
      if(this.cameraImg !== null)
      {
        this.imgSource = this.base64 + this.cameraImg;
        this.cameraImg = this.base64 + this.cameraImg;
      }
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
            this.capturarFotoProducto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camera',
          handler: () => {
            this.capturarFotoProducto(this.camera.PictureSourceType.CAMERA);
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
