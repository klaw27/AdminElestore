import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Producto, User, CatProducto } from '../../models/model';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ElstorapiProvider } from '../../providers/elstorapi/elstorapi';
import { NegocioDetallePage } from '../negocio-detalle/negocio-detalle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-negocio-editar-producto',
  templateUrl: 'negocio-editar-producto.html',
})
export class NegocioEditarProductoPage {

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
  complemento:AbstractControl;

  editar: boolean = false;
  cameraImg:any = null;
  base64:any = 'data:image/jpeg;base64,'; 

  toast:any;

  constructor(public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public api: ElstorapiProvider,
    public camera: Camera,
    public navParams: NavParams,
    private _sanitizer: DomSanitizer,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {

      this.formGroup = formBuilder.group({
        platillo: ['',[Validators.required]],
        descripcion:['', [Validators.required]],
        precio:['', [Validators.required]],
        cantidad:['', [Validators.required]],
        tiempopreparacion:['', [Validators.required]],
        catproducto:['',[Validators.required]],
        otracategoria:['',[Validators.required]],
        complemento:['',[Validators.required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];
        this.tiempopreparacion = this.formGroup.controls['tiempopreparacion'];
        this.catproducto = this.formGroup.controls['catproducto'];
        this.otracategoria = this.formGroup.controls['otracategoria'];
        this.complemento = this.formGroup.controls['complemento'];

      this.userModel =  navParams.get('item');
      this.producto = navParams.get('item2');

      this.imgSource = this.producto.fotografia !== '/assets/imgs/producto.png' ? 
      this._sanitizer.bypassSecurityTrustResourceUrl(this.producto.fotografia): this.imgSource;
      debugger;
  }

  ionViewDidLoad() {}
  ionViewWillEnter(){
    this.obtnerCatProductoPorIdCatNegocio();
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}

  agregarProducto(prod, biz, $event)
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

    let message:string = "Editando producto...";
    let loader = this.loadingCtrl.create({
      content: message
    });

    this.producto = prod;
    this.producto.fotografia = this.imgSource;

     this.toast = this.toastController.create({
      message: 'Ocurrio un error...',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });

    let alert = this.alertCtrl.create({
      title: 'Producto Editado',
      subTitle: 'Producto Editado correctamente!',
      buttons: [{
        text: 'Ok',
      handler: () => {
        this.navCtrl.push(NegocioDetallePage, {item:this.userModel});
      }
    }]
    });

   loader.present().then(() => {
    this.api.editarProducto(this.producto).subscribe(
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
              loader.dismiss();
              this.toast.dismiss();
          });
      }
      },
       (error: any) => {
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

  cancelar()
  {
    this.navCtrl.pop();
  }

  capturarFotoProducto(source:any)
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:source
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraImg =  imageData;;
      
      if(this.cameraImg !== null)
      {
        this.imgSource = this.base64 + imageData;
        this.cameraImg = this.base64 + imageData;
      }
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

  obtnerCatProductoPorIdCatNegocio()
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

    this.api.obtnerCatProductoPorIdCatNegocio(this.userModel.negocio[0]).subscribe(
        (data: CatProducto[]) => {

          debugger;
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
          loader.dismiss();
        });
  }

}