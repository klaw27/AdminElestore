import { NegocioDetallePage } from './../negocio-detalle/negocio-detalle';
import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { ElstorapiProvider } from '../../../providers/elstorapi/elstorapi';
import { User, Producto, CatProducto } from '../../../models/model';

declare function escape(s:string): string;

// @IonicPage()
@Component({
  selector: 'page-negocio-agregar-producto',
  templateUrl: 'negocio-agregar-producto.html',
})
export class NegocioAgregarProductoPage {

  public userModel: User = new User();
  public producto: Producto = new  Producto();
  public catProd: CatProducto[];

  imgSource:any  = '/assets/imgs/producto.png';
  formGroup: FormGroup;

  platillo:AbstractControl;
  precio:AbstractControl;
  descripcion: AbstractControl;
  foto:AbstractControl;
  cantidad: AbstractControl;
  tiempopreparacion: AbstractControl;
  catproducto: AbstractControl;
  otracategoria:AbstractControl;

  editar: boolean = false;
  cameraImg:any = null;
  base64:any = 'data:image/jpeg;base64,'; 

  toast:any;

  fotografia:any;

  constructor(public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public camera: Camera,
    public navParams: NavParams,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private _sanitizer: DomSanitizer) {

      this.formGroup = formBuilder.group({
        platillo: ['',[Validators.required]],
        descripcion:['', [Validators.required]],
        precio:['', [Validators.required]],
        cantidad:['', [Validators.required]],
        tiempopreparacion:['', [Validators.required]],
        catproducto:['',[Validators.required]],
        otracategoria:['',[Validators.required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];
        this.tiempopreparacion = this.formGroup.controls['tiempopreparacion'];
        this.catproducto = this.formGroup.controls['catproducto'];
        this.otracategoria = this.formGroup.controls['otracategoria'];

      this.userModel =  navParams.get('item');

      this.producto.negocioid = this.userModel.clientid;
  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.obtnerCatProductoPorIdCatNegocio();
    this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.producto.fotografia}`);

  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarProducto(prod)
  {
    if(prod.id_catProducto === undefined 
      || (prod.complemento === null || prod.complemento.replace(/ /g, "").toLowerCase() == "")
      || (prod.descripcion === null || prod.descripcion.replace(/ /g, "").toLowerCase()== ""))
    {
      this.toast = this.toastController.create({
        message: 'Todos los campos son obligatorios!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Done'
      });

        this.toast.present(); 
        
        return;
    }
    let message:string = "Agregando Producto..";
    let loader = this.loadingCtrl.create({
      content: message
    });
  

    // this.producto = prod;
    // this.producto.fotografia = this.imgSource;

    prod = this.producto;
    prod.FK_idNegocio = this.userModel.negocio[0].id_negocio;
    // prod.fotografia = this.fotografia;

     this.toast = this.toastController.create({
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
        this.navCtrl.push(NegocioDetallePage, {item:this.userModel});
      }
    }]
    });

    loader.present().then(() => {

      this.api.agregarProducto(this.producto).subscribe(
        (data: Producto) => {
        if(data !== null)
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
    // console.log(prod,biz)
   
  }

  cancelar()
  {
    this.navCtrl.pop();
  }

  capturarFotoProducto(source:any)
  {
    const options: CameraOptions = {
      quality : 100,
      destinationType : this.camera.DestinationType.DATA_URL,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: true,
      sourceType:source
    }

    this.camera.getPicture(options)
    .then((imageData) => 
    {
      imageData = escape(imageData);
      this.producto.fotografia = 'data:image/jpeg;base64,'+imageData;
      this.fotografia  = this._sanitizer.bypassSecurityTrustUrl(`${this.producto.fotografia }`);
 
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
          icon: 'images',
          handler: () => {
            this.capturarFotoProducto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camera',
          icon: 'camera',
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

  obtnerCatProductoPorIdCatNegocio()
  {

    let loader = this.loadingCtrl.create({
      content: 'Obteniendo categorias para el producto...'
    });

    const toast = this.toastController.create({
      message: 'Error obteniendo categorias...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    loader.present().then(() => {

    this.api.obtnerCatProductoPorIdCatNegocio(this.userModel.negocio[0]).subscribe(
        (data: CatProducto[]) => {

          if(data !== null)
            {
              this.catProd = data;
              loader.dismiss();
            }
          else
          {
            toast.present().then(() => {
               toast.dismiss();
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
             
                
              this.toast.onDidDismiss(() => {
                
              });
              this.toast.present().then(() => {
                  
                });
          });
        });
  }
    back()
    {
      this.navCtrl.push(NegocioDetallePage, {item: this.userModel});
    } 
}
