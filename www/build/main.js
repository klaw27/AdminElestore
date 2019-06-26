webpackJsonp([1],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inicio_inicio__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_model__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var usuario;
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_6__models_model__["c" /* User */]();
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.get('usuario');
    };
    HomePage.prototype.ionViewWillLeave = function () { };
    HomePage.prototype.ionViewWillUnload = function () { };
    HomePage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.get = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("setting:" + settingName).then(function (value) {
                            usuario = value;
                            if (usuario != null) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__inicio_inicio__["a" /* InicioPage */], { item: usuario });
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/home/home.html"*/'\n<ion-content padding>\n\n    <img class="logo" src="/assets/imgs/ElEstorLogoCuadroyAza.png" >\n\n<ion-grid>\n<ion-row>\n    <p >\n        Bienvenido, desde aqui podras administrar tu negocio\n    </p>\n</ion-row>\n<ion-row>\n  <ion-col >\n      <button clear ion-button full (click)="goToLoginPage()">\n          Inciar Sesion\n        </button>\n  </ion-col>\n  <ion-col>\n      <button ion-button full (click)="goToRegisterPage()">\n          Registrarse\n        </button>\n    </ion-col>\n</ion-row>\n<ion-row>\n    <ion-footer>\n      <!-- <p text-center>Powered by</p>\n      <p text-center>Lex Software S.A. de C.V. All Rights Reserved 2019</p> -->\n    </ion-footer>\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recuperarcuenta_recuperarcuenta__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// @IonicPage()
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, api, alertCtrl, loadingCtrl, toastController, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.storage = storage;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_5__models_model__["c" /* User */]();
        this.imgSource = '/assets/imgs/user.png';
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.ionViewWillLeave = function () { };
    LoginPage.prototype.ionViewWillUnload = function () { };
    LoginPage.prototype.iniciarSesion = function ($event, usr) {
        var _this = this;
        var title = '';
        var subTitle = '';
        this.userModel = usr;
        var loader = this.loadingCtrl.create({
            content: 'Iniciando sesion...'
        });
        loader.present().then(function () {
            _this.api.inicarSesion(usr).subscribe(function (data) {
                switch (data) {
                    case undefined:
                        title = 'Ocurrio un error';
                        subTitle = 'Usuario/password incorrecto';
                        break;
                    case null:
                        title = 'Ocurrio un error';
                        subTitle = 'Revise su conexion a internet!';
                        break;
                    default:
                        if (data[0] === undefined) {
                            title = 'Ocurrio un error';
                            subTitle = 'Usuario no registrado!';
                        }
                        else {
                            title = 'Bienvenido';
                            subTitle = 'Bienvenido ' + data[0].nombreUsuario;
                        }
                        break;
                }
                var alert = _this.alertCtrl.create({
                    title: title,
                    subTitle: subTitle,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                if (data[0] !== undefined &&
                                    data !== null &&
                                    data !== undefined) {
                                    _this.set('usuario', data[0]);
                                    var loader_1 = _this.loadingCtrl.create({
                                        content: 'Iniciando sesion...'
                                    });
                                    loader_1.present().then(function () {
                                        loader_1.dismiss();
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */], { item: data[0] });
                                    });
                                }
                                else {
                                    loader.dismiss();
                                }
                            }
                        }]
                });
                alert.present().then(function () {
                    loader.dismiss();
                });
            }, function (error) {
                title = 'Ocurrio un Error';
                subTitle = error;
            });
            //loader.dismiss();
        });
    };
    LoginPage.prototype.recuperarCuenta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__recuperarcuenta_recuperarcuenta__["a" /* RecuperarcuentaPage */]);
    };
    LoginPage.prototype.set = function (settingName, value) {
        return this.storage.set("setting:" + settingName, value);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inicio de Sesion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="user">\n      <img class="imgUser" [src]="imgSource">\n    </div>\n  <form [formGroup]="formGroup">\n    <ion-list class="list">\n      <ion-item class="correo">\n        <ion-input class="correo-input" placeholder="Correo" type="email" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="email.hasError(\'required\') && email.touched ">\n        <p style="color:red">\n*Valid email is required\n        </p>\n        </ion-item>\n      <ion-item class="contraseña">\n        <ion-input class="contraseña-input" placeholder="Contraseña" type="password" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n        <p style="color:red">\n    *Type a valid password\n        </p>\n        </ion-item>\n\n    </ion-list>\n<ion-grid>\n<ion-row>\n  <button clear  type="submit"  [disabled]="formGroup.invalid" ion-button full (click)="iniciarSesion($event, userModel)" >\n    Iniciar Sesion\n</button>\n</ion-row>\n<ion-row>\n  <button clear ion-button full color="danger" (click)="recuperarCuenta()" >\n    Olvide Mi Contrasenia\n</button>\n</ion-row>\n</ion-grid>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevonegocioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__negocio_detalle_negocio_detalle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










// @IonicPage()
var NuevonegocioPage = /** @class */ (function () {
    function NuevonegocioPage(navCtrl, navParams, formBuilder, api, alertCtrl, loadingCtrl, toastController, geolocation, camera, actionSheetCtrl, storage, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["c" /* User */]();
        this.negocio = new __WEBPACK_IMPORTED_MODULE_3__models_model__["a" /* Negocio */]();
        this.formGroup = formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            callenumero: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            codigopostal: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(5)]],
            horaapertura: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            horacierre: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            categoria: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            FK_subcategoria: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]]
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
        this.userModel = navParams.get('item');
    }
    NuevonegocioPage.prototype.ionViewDidLoad = function () { };
    NuevonegocioPage.prototype.ionViewWillEnter = function () {
        this.getCatNegocio();
    };
    NuevonegocioPage.prototype.ionViewWillLeave = function () { };
    NuevonegocioPage.prototype.ionViewWillUnload = function () { };
    NuevonegocioPage.prototype.agregarNegocio = function ($event, biz, clientid) {
        var _this = this;
        this.negocio = biz;
        this.negocio.clientid = this.userModel.clientid;
        // this.negocio.fotografia = this.imgSourceBanner;
        // this.negocio.fotografia2 = this.imgSourceLogo;
        var message = "Agregando negocio..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        this.toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Negocio Agregado',
            subTitle: 'Negocio Agregado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.userModel.negocio.push(_this.negocio);
                        _this.storage.remove('usuario');
                        _this.storage.set('usuario', _this.userModel);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: _this.userModel });
                    }
                }]
        });
        loader.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.negocio.latitud = resp.coords.latitude.toString();
                _this.negocio.longitud = resp.coords.longitude.toString();
                _this.api.agregarNegocio(_this.negocio).subscribe(function (data) {
                    if (data !== null || data === 1) {
                        alert.present().then(function () {
                            loader.dismiss();
                        });
                    }
                    else {
                        _this.toast.present().then(function () {
                            _this.toast.dismiss();
                            loader.dismiss();
                        });
                    }
                }, function (error) {
                    loader.dismiss();
                });
            }).catch(function (error) {
                console.log('Error getting location', error);
                loader.dismiss();
            });
        });
    };
    NuevonegocioPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NuevonegocioPage.prototype.getCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Obteniendo categorias...'
        });
        this.toast = this.toastController.create({
            message: 'Error obteniendo categorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getCatNegocio().subscribe(function (data) {
                if (data !== null) {
                    //
                    _this.catnegocio = data;
                    loader.dismiss();
                }
                else {
                    _this.toast.present().then(function () {
                        _this.toast.dismiss();
                        loader.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                loader.dismiss();
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NuevonegocioPage.prototype.getSubCatNegocio = function ($event, cat) {
        var _this = this;
        var id_CatNegocio = cat.id_catNegocio;
        var loader = this.loadingCtrl.create({
            content: 'Obteniendo subcategorias...'
        });
        this.toast = this.toastController.create({
            message: 'Error obteniendo subcategorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getSubCatNegocio(id_CatNegocio).subscribe(function (data) {
                if (data !== null) {
                    loader.dismiss();
                    _this.subcatnegocio = data;
                }
                else {
                    _this.toast.present().then(function () {
                        _this.toast.dismiss();
                        loader.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                loader.dismiss();
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NuevonegocioPage.prototype.subCatChange = function ($event, cat) {
    };
    NuevonegocioPage.prototype.catChange = function ($event, subcat) {
    };
    NuevonegocioPage.prototype.capturarFotoLogo = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).
            then(function (imageData) {
            imageData = escape(imageData);
            _this.negocio.fotografia2 = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia2 = _this._sanitizer.bypassSecurityTrustUrl("" + _this.negocio.fotografia2);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    NuevonegocioPage.prototype.capturarFotoBanner = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.negocio.fotografia = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.negocio.fotografia);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    NuevonegocioPage.prototype.presentActionSheetBanner = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFotoBanner(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFotoBanner(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NuevonegocioPage.prototype.presentActionSheetLogo = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFotoLogo(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFotoLogo(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NuevonegocioPage.prototype.set = function (settingName, value) {
        return this.storage.set("setting:" + settingName, value);
    };
    NuevonegocioPage.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("setting:" + settingName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NuevonegocioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-nuevonegocio',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/nuevonegocio/nuevonegocio.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Agregar Negocio</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-item-group>\n        <div class="contBanner">\n            <img class=banner [src]="fotografia" alt="" onError= "this.src=\'/assets/imgs/tienda-online-icono-png.png\'" >\n             <button  color="light" class="camaraBanner" ion-button icon-only (click)="presentActionSheetBanner()">\n              <ion-icon class="icono" name="camera"></ion-icon>\n            </button>\n            <div class="contLogo">\n              <img class=logo [src]="fotografia2" alt="" onError= "this.src=\'/assets/imgs/tienda-online-icono-png.png\'" >\n              <button  color="light" class="camaraLogo" ion-button icon-only (click)="presentActionSheetLogo()">\n                  <ion-icon class="icono" name="camera"></ion-icon>\n              </button>\n            </div>\n        </div>\n    </ion-item-group>\n<ion-item-group>\n    <form [formGroup]="formGroup">\n        <ion-list>\n      <ion-item class="campo">\n          <ion-input class="entrada" placeholder="Nombre del negocio"  type="text" [(ngModel)]="negocio.nombre" formControlName="nombre" ></ion-input>\n        </ion-item>\n          <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n            <p style="color:red">\n          *Nombre del negocio es obligatorio\n          </p>\n          </ion-item>\n  \n          <ion-item class="campo">\n              <ion-input class="entrada" placeholder="Calle y Numero"  type="text" [(ngModel)]="negocio.callenumero" formControlName="callenumero" ></ion-input>\n            </ion-item>\n              <ion-item *ngIf="callenumero.hasError(\'required\') && callenumero.touched ">\n                <p style="color:red">\n        *Calle y numero es obligatorio\n              </p>\n              </ion-item>\n  \n              <ion-item class="campo">\n                  <ion-input class="entrada" placeholder="Colonia"  type="text" [(ngModel)]="negocio.colonia" formControlName="colonia" ></ion-input>\n                </ion-item>\n                  <ion-item *ngIf="colonia.hasError(\'required\') && colonia.touched ">\n                    <p style="color:red">\n            *Colonia es obligatorio\n                  </p>\n                  </ion-item>\n  \n                  <ion-item class="campo">\n                      <ion-input class="entrada" placeholder="Ciudad"  type="text" [(ngModel)]="negocio.ciudad" formControlName="ciudad" ></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="ciudad.hasError(\'required\') && ciudad.touched ">\n                        <p style="color:red">\n                *Ciudad es obligatorio\n                      </p>\n                      </ion-item>\n  \n                      <ion-item class="campo">\n                          <ion-input class="entrada" placeholder="Estado"  type="text" [(ngModel)]="negocio.estado" formControlName="estado"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="estado.hasError(\'required\') && estado.touched">\n                          <p style="color:red">\n                      *Estado es obligatorio\n                          </p>\n                          </ion-item>\n  \n                          <ion-item class="campo">\n                            <ion-input class="entrada" placeholder="Codigo Postal"  type="number" [(ngModel)]="negocio.codigopostal" formControlName="codigopostal"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="(codigopostal.hasError(\'required\') && codigopostal.touched) || (codigopostal.hasError(\'maxLength\'))">\n                            <p style="color:red">\n                        *Codigo Postal es obligatorio / Maximo 5 digitos\n                            </p>\n                            </ion-item>\n                            <ion-item class="campo">\n                                <ion-label>Hora Apertura</ion-label>\n                                <ion-input class="entrada" placeholder="Hora Apertura"  type="time" [(ngModel)]="negocio.horaapertura" formControlName="horaapertura"></ion-input>\n                                <!-- <ion-datetime display-format="HH:mm" formControlName="horaapertura"></ion-datetime> -->\n                              </ion-item>\n                              <ion-item *ngIf="horaapertura.hasError(\'required\') && horaapertura.touched">\n                                <p style="color:red">\n                            *Hora Apertura es obligatorio\n                                </p>\n                                </ion-item>\n                                <ion-item class="campo">\n                                    <ion-label>Hora Cierre</ion-label>\n                                    <!-- <ion-datetime display-format="HH:mm" formControlName="horacierre"></ion-datetime> -->\n                                    <ion-input class="entrada" placeholder="Hora Cierre"  type="time" [(ngModel)]="negocio.horacierre" formControlName="horacierre"></ion-input>\n                                  </ion-item>\n                                  <ion-item *ngIf="horacierre.hasError(\'required\') && horacierre.touched">\n                                    <p style="color:red">\n                                *Hora Cierre es obligatorio\n                                    </p>\n                                    </ion-item>\n                                    <ion-item class="campo">\n                                      <ion-label>Categoria</ion-label>\n                                      <ion-select  [(ngModel)]="negocio.categoria" formControlName="categoria" placeholder="Selecciona una cagetoria"\n                                      onchange="getSubCatNegocio($event, cat)">\n                                        <ion-option (ionSelect)="getSubCatNegocio(this, cat)" value="{{cat.nombre}}" *ngFor="let cat of catnegocio">{{cat.nombre}}</ion-option>\n                                      </ion-select>\n                                    </ion-item>\n                              <!-- <ion-item>\n                                <ion-label>\n                                  Categoria\n                                </ion-label>\n                                <ion-input type="text" [(ngModel)]="negocio.categoria" formControlName="categoria"></ion-input>\n                              </ion-item> -->\n                              <!-- <ion-item *ngIf="categoria.hasError(\'required\') && categoria.touched">\n                                <p style="color:red">\n                            *Categoria es obligatorio\n                                </p>\n                                </ion-item> -->\n  \n                                <ion-item class="campo">\n                                    <ion-label>\n                                      Subcategoria\n                                    </ion-label>\n                                    <ion-select  [(ngModel)]="negocio.FK_subcategoria" formControlName="FK_subcategoria" placeholder="Selecciona una subcagetoria">\n                                        <ion-option value="{{subcat.fK_CATNEGOCIO}}"  *ngFor="let subcat of subcatnegocio">{{subcat.nombre}}</ion-option>\n                                      </ion-select>\n                                  </ion-item>\n                                  <!-- <ion-item *ngIf="subcategoria.hasError(\'required\') && subcategoria.touched">\n                                    <p style="color:red">\n                                *Subcategoria es obligatorio\n                                    </p>\n                                    </ion-item> -->\n  \n                                    <ion-item class="campo">\n                                        <ion-input class="entrada" placeholder="Descripcion"  type="text" [(ngModel)]="negocio.descripcion" formControlName="descripcion"></ion-input>\n                                      </ion-item>\n                                      <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                                        <p style="color:red">\n                                    *Descripcion es obligatorio\n                                        </p>\n                                        </ion-item>\n  \n\n        </ion-list>\n    <ion-grid>\n    <ion-col>\n  \n    </ion-col>\n    <ion-col>\n    <ion-row>\n        <!-- [disabled]="formGroup.invalid" -->\n    <button type="submit"  ion-button full color="light" (click)="agregarNegocio($event, negocio)" >\n      Agregar Negocio\n    </button>\n    </ion-row>\n    <ion-row>\n    <button ion-button full color="danger" (click)="cancelar()" >\n      Cancelar\n    </button>\n    </ion-row>\n    </ion-col>\n    <ion-col>\n  \n    </ion-col>\n    </ion-grid>\n  \n    </form>\n  \n</ion-item-group>\n   \n  </ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/nuevonegocio/nuevonegocio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NuevonegocioPage);
    return NuevonegocioPage;
}());

//# sourceMappingURL=nuevonegocio.js.map

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 247;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosNoEntregadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage()
var PedidosNoEntregadosPage = /** @class */ (function () {
    function PedidosNoEntregadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedidosNoEntregadosPage.prototype.ionViewDidLoad = function () {
    };
    PedidosNoEntregadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos-no-entregados',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos-no-entregados/pedidos-no-entregados.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>No Entregados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <label>\n      <h2>No Entregados</h2>\n    </label>\n  <ion-item-divider>\n    <ion-list>\n      <ion-item>\n          Listar no entregados\n      </ion-item>\n      <ion-item>\n        \n      </ion-item>\n    </ion-list>\n  </ion-item-divider>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos-no-entregados/pedidos-no-entregados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PedidosNoEntregadosPage);
    return PedidosNoEntregadosPage;
}());

//# sourceMappingURL=pedidos-no-entregados.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negocio; });
/* unused harmony export CatNegocio */
/* unused harmony export SubCatNegocio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Producto; });
/* unused harmony export CatProducto */
var User = /** @class */ (function () {
    function User() {
        this.clientid = "";
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.nombreUsuario = "";
        this.password = "";
        this.confirmPassword = "";
        this.email = "";
        this.numeroTelefonico = "";
    }
    return User;
}());

var Negocio = /** @class */ (function () {
    function Negocio() {
        this.clientid = "";
        this.string = "";
        this.nombre = "";
        this.callenumero = "";
        this.colonia = "";
        this.ciudad = "";
        this.estado = "";
        this.codigopostal = "";
        this.horaapertura = "";
        this.horacierre = "";
        this.categoria = "";
        this.subcategoria = "";
        this.FK_subcategoria = -1;
        this.descripcion = "";
        this.latitud = "";
        this.longitud = "";
        this.active = 1;
        this.id_negocio = 0;
    }
    return Negocio;
}());

var CatNegocio = /** @class */ (function () {
    function CatNegocio() {
        this.id_catNegocio = -1;
        this.nombre = "";
        this.descripcion = "";
    }
    return CatNegocio;
}());

var SubCatNegocio = /** @class */ (function () {
    function SubCatNegocio() {
        this.nombre = "";
        this.descripcion = "";
        this.fK_CATNEGOCIO = -1;
        this.id_catNegocio = -1;
    }
    return SubCatNegocio;
}());

var Producto = /** @class */ (function () {
    function Producto() {
        this.clave = "";
        this.complemento = "";
        this.descripcion = "";
        this.estatus = 1;
        this.id_producto = 0;
        this.negocioid = "";
        this.nombre = "";
        this.otracategoria = "";
        this.precio = 0;
    }
    return Producto;
}());

var CatProducto = /** @class */ (function () {
    function CatProducto() {
        this.id_catProducto = 0;
        this.nombre = "";
        this.descripcion = "";
        this.clave = 0;
        this.estatus = 0;
    }
    return CatProducto;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElstorapiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = 'http://ec2-52-53-191-68.us-west-1.compute.amazonaws.com:5000';
//  const url = 'https://localhost:5001';
// const url = 'http://192.168.0.15:5000';
// local
var baseurlRegistro = url + "/api/registro/usuario";
var baseurlActualizar = url + "/api/cuenta/actualizar";
var baseurlLogin = url + "/api/usuario/inicio";
var baseurlRecuperar = url + "/api/cuenta/recuperar";
var baseurlNegocio = url + "/api/negocio/agregar";
var baseurlNegocioEditar = url + "/api/negocio/editar";
var baseurlNegocioObtener = url + "/api/negocio/obtener";
var baseurlCatNegocio = url + "/api/negocio/catnegocio";
var baseurlSubCatNegocio = url + "/api/negocio/subcatnegocio";
var baseurlProductoObtener = url + "/api/negocio/producto/obtener";
var baseurlProductoAgregar = url + "/api/negocio/producto/agregar";
var baseurlProductoBorrar = url + "/api/negocio/producto/borrar";
var baseurlCatProductoPorIdCatNegocio = url + "/api/negocio/producto/obtenercatprod";
var baseurlProductoEditar = url + "/api/negocio/producto/editar";
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var ElstorapiProvider = /** @class */ (function () {
    function ElstorapiProvider(http) {
        this.http = http;
    }
    // obtenerPedidos():Observable<any[]>
    // {
    //    this.items = this.afDB.list('/pedidos').valueChanges();
    //    return this.items.pipe(
    //     tap((data: any) => {
    //     //console.log(data);
    // }),
    // catchError((err) => {
    //   throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
    //       })
    // );;
    // }
    ElstorapiProvider.prototype.registrarUsuario = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlRegistro, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.actualizarCuenta = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlActualizar, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            console.log(err);
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.recuperarCuenta = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlRecuperar, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.inicarSesion = function (usr) {
        var userModel = JSON.stringify(usr);
        return this.http.post(baseurlLogin, userModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.agregarNegocio = function (biz) {
        var negocioModel = JSON.stringify(biz);
        return this.http.post(baseurlNegocio, negocioModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.editarNegocio = function (biz) {
        var negocioModel = JSON.stringify(biz);
        return this.http.post(baseurlNegocioEditar, negocioModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.obtenerNegocio = function (clientid) {
        var id = JSON.stringify(clientid);
        return this.http.post(baseurlNegocioObtener, id, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.getCatNegocio = function () {
        return this.http.post(baseurlCatNegocio, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.getSubCatNegocio = function (id) {
        return this.http.post(baseurlSubCatNegocio, id, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.getProductos = function (negocio) {
        return this.http.post(baseurlProductoObtener, negocio, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.agregarProducto = function (prod) {
        var prodModel = JSON.stringify(prod);
        return this.http.post(baseurlProductoAgregar, prodModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.editarProducto = function (prod) {
        var prodModel = JSON.stringify(prod);
        return this.http.post(baseurlProductoEditar, prodModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.borrarProducto = function (prod) {
        var prodModel = JSON.stringify(prod);
        return this.http.post(baseurlProductoBorrar, prodModel, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider.prototype.obtnerCatProductoPorIdCatNegocio = function (negocio) {
        var cat = JSON.stringify(negocio.categoria);
        return this.http.post(baseurlCatProductoPorIdCatNegocio, cat, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) {
            //console.log(data);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) {
            throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        }));
    };
    ElstorapiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ElstorapiProvider);
    return ElstorapiProvider;
}());

//# sourceMappingURL=elstorapi.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal-pedido/modal-pedido.module": [
		655,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 290;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioDetalleEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__negocio_detalle_negocio_detalle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










// @IonicPage()
var NegocioDetalleEditarPage = /** @class */ (function () {
    function NegocioDetalleEditarPage(navCtrl, navParams, formBuilder, loadingCtrl, toastController, alertCtrl, api, geolocation, camera, _sanitizer, actionSheetCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.geolocation = geolocation;
        this.camera = camera;
        this._sanitizer = _sanitizer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.negocio = new __WEBPACK_IMPORTED_MODULE_4__models_model__["a" /* Negocio */]();
        this.editar = true;
        this.formGroup = formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            callenumero: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            codigopostal: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(5)]],
            horaapertura: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            horacierre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            categoria: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            subcategoria: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]]
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
        this.userModel = navParams.get('item');
        this.negocio = this.userModel.negocio[0];
    }
    NegocioDetalleEditarPage.prototype.ionViewDidLoad = function () { };
    NegocioDetalleEditarPage.prototype.ionViewWillEnter = function () {
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.userModel.negocio[0].fotografia);
        this.fotografia2 = this._sanitizer.bypassSecurityTrustUrl("" + this.userModel.negocio[0].fotografia2);
        this.getCatNegocio();
    };
    NegocioDetalleEditarPage.prototype.ionViewWillLeave = function () { };
    NegocioDetalleEditarPage.prototype.ionViewWillUnload = function () { };
    NegocioDetalleEditarPage.prototype.guardarNegocio = function ($event, biz, clientid) {
        var _this = this;
        var strclientid = this.negocio.clientid;
        this.negocio = biz;
        this.negocio.clientid = strclientid;
        // this.negocio.fotografia = this.fotografia;
        // this.negocio.fotografia2 = this.fotografia2;
        var message = "Editando negocio..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        this.toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Negocio Editado',
            subTitle: 'Negocio Editado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.userModel.negocio[0] = _this.negocio;
                        _this.remove('usuario').then(function () {
                            _this.set('usuario', _this.userModel);
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: _this.userModel });
                    }
                }]
        });
        loader.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.negocio.latitud = resp.coords.latitude.toString();
                _this.negocio.longitud = resp.coords.longitude.toString();
                _this.api.editarNegocio(_this.negocio).subscribe(function (data) {
                    if (data.toString() === "1") {
                        alert.present().then(function () {
                            loader.dismiss();
                        });
                    }
                    else {
                        _this.toast.present().then(function () {
                            loader.dismiss();
                            _this.toast.dismiss();
                        });
                    }
                }, function (error) {
                    _this.toast = _this.toastController.create({
                        message: error,
                        showCloseButton: true,
                        position: 'bottom',
                        closeButtonText: 'Ok'
                    });
                    loader.dismiss();
                    _this.toast.onDidDismiss(function () {
                    });
                    _this.toast.present().then(function () {
                    });
                });
            }).catch(function (error) {
                loader.dismiss();
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NegocioDetalleEditarPage.prototype.capturarFotoLogo = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.negocio.fotografia2 = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia2 = _this._sanitizer.bypassSecurityTrustResourceUrl("" + _this.userModel.negocio[0].fotografia2);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    NegocioDetalleEditarPage.prototype.capturarFotoBanner = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.negocio.fotografia = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustResourceUrl("" + _this.userModel.negocio[0].fotografia);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    NegocioDetalleEditarPage.prototype.editarNegocio = function () {
        this.editar = !this.editar;
    };
    NegocioDetalleEditarPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NegocioDetalleEditarPage.prototype.getCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Obteniendo categorias...'
        });
        this.toast = this.toastController.create({
            message: 'Error obteniendo categorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getCatNegocio().subscribe(function (data) {
                if (data !== null) {
                    _this.catnegocio = data;
                    loader.dismiss();
                }
                else {
                    _this.toast.present().then(function () {
                        _this.toast.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NegocioDetalleEditarPage.prototype.getSubCatNegocio = function ($event, cat) {
        var _this = this;
        var id_CatNegocio = cat.id_catNegocio;
        var loader = this.loadingCtrl.create({
            content: 'Obteniendo subcategorias...'
        });
        this.toast = this.toastController.create({
            message: 'Error obteniendo subcategorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.getSubCatNegocio(id_CatNegocio).subscribe(function (data) {
                if (data !== null) {
                    //
                    _this.subcatnegocio = data;
                }
                else {
                    _this.toast.present().then(function () {
                        _this.toast.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
            loader.dismiss();
        });
    };
    NegocioDetalleEditarPage.prototype.presentActionSheetBanner = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFotoBanner(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFotoBanner(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NegocioDetalleEditarPage.prototype.presentActionSheetLogo = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFotoLogo(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFotoLogo(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NegocioDetalleEditarPage.prototype.someFunc = function (e, $event) {
    };
    NegocioDetalleEditarPage.prototype.set = function (settingName, value) {
        return this.storage.set("setting:" + settingName, value);
    };
    NegocioDetalleEditarPage.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("setting:" + settingName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NegocioDetalleEditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-negocio-detalle-editar',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-detalle-editar/negocio-detalle-editar.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Editar Negocio</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content [scrollEvents]="true">\n    <ion-item-group>\n        <div class="contBanner">\n            <img class=banner [src]="fotografia" alt="" onError= "this.src=\'/assets/imgs/tienda-online-icono-png.png\'">\n             <button [disabled]="editar" color="light" class="camaraBanner" ion-button icon-only (click)="presentActionSheetBanner()">\n              <ion-icon class="icono" name="camera"></ion-icon>\n            </button>\n            <div class="contLogo">\n              <img class=logo [src]="fotografia2" alt="" onError= "this.src=\'/assets/imgs/tienda-online-icono-png.png\'">\n              <button [disabled]="editar" color="light" class="camaraLogo" ion-button icon-only (click)="presentActionSheetLogo()">\n                  <ion-icon class="icono" name="camera"></ion-icon>\n              </button>\n            </div>\n        </div>\n    </ion-item-group>\n  <ion-item-group>\n    \n      <form [formGroup]="formGroup">\n          <ion-list>\n        <ion-item class="campo">\n            <ion-input class="entrada" placeholder="Nombre del negocio" [disabled]="editar" type="text" [(ngModel)]="negocio.nombre" formControlName="nombre" ></ion-input>\n          </ion-item>\n            <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n              <p style="color:red">\n            *Nombre del negocio es obligatorio\n            </p>\n            </ion-item>\n    \n            <ion-item class="campo">\n                <ion-input class="entrada" placeholder="Calle y Numero" [disabled]="editar" type="text" [(ngModel)]="negocio.callenumero" formControlName="callenumero" ></ion-input>\n              </ion-item>\n                <ion-item *ngIf="callenumero.hasError(\'required\') && callenumero.touched ">\n                  <p style="color:red">\n          *Calle y numero es obligatorio\n                </p>\n                </ion-item>\n    \n                <ion-item class="campo">\n                    <ion-input class="entrada" placeholder="Colonia" [disabled]="editar" type="text" [(ngModel)]="negocio.colonia" formControlName="colonia" ></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="colonia.hasError(\'required\') && colonia.touched ">\n                      <p style="color:red">\n              *Colonia es obligatorio\n                    </p>\n                    </ion-item>\n    \n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Ciudad" [disabled]="editar" type="text" [(ngModel)]="negocio.ciudad" formControlName="ciudad" ></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="ciudad.hasError(\'required\') && ciudad.touched ">\n                          <p style="color:red">\n                  *Ciudad es obligatorio\n                        </p>\n                        </ion-item>\n    \n                        <ion-item class="campo">\n                            <ion-input class="entrada" placeholder="Estado" [disabled]="editar" type="text" [(ngModel)]="negocio.estado" formControlName="estado"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="estado.hasError(\'required\') && estado.touched">\n                            <p style="color:red">\n                        *Estado es obligatorio\n                            </p>\n                            </ion-item>\n    \n                            <ion-item class="campo">\n                              <ion-input p class="entrada" placeholder="Codigo Postal" [disabled]="editar" type="number" [(ngModel)]="negocio.codigopostal" formControlName="codigopostal"></ion-input>\n                            </ion-item>\n                                <ion-item *ngIf="(codigopostal.hasError(\'required\') && codigopostal.touched) || (codigopostal.hasError(\'maxLength\'))">\n                                  <p style="color:red">\n                          *Codigo Postal es obligatorio\n                              </p>\n                              </ion-item>\n                              <ion-item class="campo">\n                                  <ion-label>Hora Apertura</ion-label>\n                                  <ion-input class="entrada" placeholder="Hora Apertura" type="time" [(ngModel)]="negocio.horaapertura" formControlName="horaapertura"></ion-input>\n                                  <!-- <ion-datetime display-format="HH:mm" formControlName="horaapertura"></ion-datetime> -->\n                                </ion-item>\n                                <ion-item *ngIf="horaapertura.hasError(\'required\') && horaapertura.touched">\n                                  <p style="color:red">\n                              *Hora Apertura es obligatorio\n                                  </p>\n                                  </ion-item>\n                                  <ion-item class="campo">\n                                      <ion-label>Hora Cierre</ion-label>\n                                      <!-- <ion-datetime display-format="HH:mm" formControlName="horacierre"></ion-datetime> -->\n                                      <ion-input class="entrada" placeholder="Hora Cierre"  type="time" [(ngModel)]="negocio.horacierre" formControlName="horacierre"></ion-input>\n                                    </ion-item>\n                                    <ion-item *ngIf="horacierre.hasError(\'required\') && horacierre.touched">\n                                      <p style="color:red">\n                                  *Hora Cierre es obligatorio\n                                      </p>\n                                      </ion-item>\n                                      <ion-item class="campo">\n                                        <ion-label>Categoria</ion-label>\n                                        <ion-select  [(ngModel)]="negocio.categoria" formControlName="categoria" placeholder="Selecciona una cagetoria"\n                                        onchange="getSubCatNegocio($event, cat)">\n                                          <ion-option (ionSelect)="getSubCatNegocio(this, cat)" value="{{cat.nombre}}" *ngFor="let cat of catnegocio">{{cat.nombre}}</ion-option>\n                                        </ion-select>\n                                      </ion-item>\n                                <!-- <ion-item>\n                                  <ion-label>\n                                    Categoria\n                                  </ion-label>\n                                  <ion-input type="text" [(ngModel)]="negocio.categoria" formControlName="categoria"></ion-input>\n                                </ion-item> -->\n                                <!-- <ion-item *ngIf="categoria.hasError(\'required\') && categoria.touched">\n                                  <p>\n                              *Categoria es obligatorio\n                                  </p>\n                                  </ion-item> -->\n    \n                                  <ion-item class="campo">\n                                      <ion-label>\n                                        Subcategoria\n                                      </ion-label>\n                                      <ion-select [disabled]="editar" [(ngModel)]="negocio.subcategoria" formControlName="subcategoria" placeholder="Selecciona una subcategoria">\n                                          <ion-option value="{{subcat.nombre}}"  *ngFor="let subcat of subcatnegocio">{{subcat.nombre}}</ion-option>\n                                        </ion-select>\n                                    </ion-item>\n                                    <!-- <ion-item *ngIf="subcategoria.hasError(\'required\') && subcategoria.touched">\n                                      <p>\n                                  *Subcategoria es obligatorio\n                                      </p>\n                                      </ion-item> -->\n    \n                                      <ion-item class="campo">\n                                          <ion-input class="entrada" placeholder="Descripcion" [disabled]="editar" type="text" [(ngModel)]="negocio.descripcion" formControlName="descripcion"></ion-input>\n                                        </ion-item>\n                                        <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                                          <p style="color:red">\n                                      *Descripcion es obligatorio\n                                          </p>\n                                          </ion-item>\n    \n    \n    \n    \n    \n          </ion-list>\n        <ion-grid>\n          <ion-row>\n                   <!-- [disabledd]="formGroup.invalid" -->\n            <button type="submit"  ion-button full color="light" (click)="editarNegocio($event, negocio)" >\n              Editar Negocio\n            </button>\n          </ion-row>\n        <ion-row>\n            <!-- [disabledd]="formGroup.invalid" -->\n        <button [disabled]="editar" type="submit"  ion-button full color="light" (click)="guardarNegocio($event, negocio)" >\n          Guardar  Negocio\n        </button>\n        </ion-row>\n    \n        </ion-grid>\n    \n        </form>\n  </ion-item-group>  \n  \n\n    </ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-detalle-editar/negocio-detalle-editar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], NegocioDetalleEditarPage);
    return NegocioDetalleEditarPage;
}());

//# sourceMappingURL=negocio-detalle-editar.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inicio_inicio__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// @IonicPage()
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, api, alertCtrl, toastController, loadingCtrl, camera, actionSheetCtrl, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["c" /* User */]();
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(8)]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            apellidoPaterno: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            apellidoMaterno: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            nombreUsuario: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            numeroTelefonico: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]]
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
    RegisterPage.prototype.ionViewDidLoad = function () { };
    RegisterPage.prototype.ionViewWillEnter = function () {
    };
    RegisterPage.prototype.ionViewWillLeave = function () { };
    RegisterPage.prototype.ionViewWillUnload = function () { };
    RegisterPage.prototype.crearCuenta = function ($event, usr) {
        var _this = this;
        var title = '';
        var subTitle = '';
        this.userModel = usr;
        // this.userModel.fotografia = this.cameraImg;
        var loaderReg = this.loadingCtrl.create({
            content: 'Registrando usuario...'
        });
        loaderReg.present().then(function () {
            _this.api.registrarUsuario(usr).subscribe(function (data) {
                loaderReg.dismiss();
                switch (data) {
                    case true:
                        title = 'Correo registrado exitosamente!';
                        subTitle = 'Bienvenido';
                        break;
                    case false:
                        title = 'Ocurrio un error';
                        subTitle = 'Ocurrio un error';
                        break;
                    default:
                        if (data === null) {
                            title = 'Ocurrio un error';
                            subTitle = 'Ya existe una cuenta asociada al correo electrònico ' + _this.userModel.email;
                        }
                        break;
                }
                var loader = _this.loadingCtrl.create({
                    content: 'Iniciando sesion...'
                });
                var alert = _this.alertCtrl.create({
                    title: title,
                    subTitle: subTitle,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                if (data === true) {
                                    loader.present().then(function () {
                                        loader.dismiss();
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__inicio_inicio__["a" /* InicioPage */], { item: _this.userModel });
                                    });
                                }
                                else {
                                    loader.dismiss();
                                }
                            }
                        }]
                });
                alert.present().then(function () {
                });
            }, function (error) {
            });
        });
    };
    RegisterPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.capturarFoto = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.userModel.fotografia = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.userModel.fotografia);
        }, function (err) {
            // Handle error
        });
    };
    RegisterPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFoto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Pagina de Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" [src]="fotografia" onError= "this.src=\'/assets/imgs/user.png\'" >\n        <button color="light" class="camara" ion-button icon-only (click)="presentActionSheet()">\n            <ion-icon class="icono" name="camera"></ion-icon>\n        </button>\n    </div>\n\n<form [formGroup]="formGroup">\n  <ion-list>\n      <ion-item class="campo">\n          <ion-input class="entrada" placeholder="Nombre" type="text" [(ngModel)]="userModel.nombre" formControlName="nombre" ></ion-input>\n        </ion-item>\n          <ion-item  *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n          <p style="color:red">\n          *Nombre es requerido\n          </p>\n          </ion-item>\n\n          <ion-item class="campo">\n              <ion-input class="entrada" placeholder="Apellido Paterno" type="text" [(ngModel)]="userModel.apellidoPaterno" formControlName="apellidoPaterno" ></ion-input>\n            </ion-item>\n              <ion-item *ngIf="apellidoPaterno.hasError(\'required\') && apellidoPaterno.touched ">\n                  <p style="color:red">\n            *Apellido Paterno es requerido\n              </p>\n              </ion-item>\n\n              <ion-item class="campo">\n                  <ion-input class="entrada" placeholder="Apeliido Materno" type="text" [(ngModel)]="userModel.apellidoMaterno" formControlName="apellidoMaterno" ></ion-input>\n                </ion-item>\n                  <ion-item *ngIf="apellidoMaterno.hasError(\'required\') && apellidoMaterno.touched ">\n                      <p style="color:red">\n            *Apellido Materno es requerido\n                  </p>\n                  </ion-item>\n\n                  <ion-item class="campo">\n                      <ion-input class="entrada" placeholder="Nombre de Usuario" type="text" [(ngModel)]="userModel.nombreUsuario" formControlName="nombreUsuario" ></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="nombreUsuario.hasError(\'required\') && nombreUsuario.touched ">\n                          <p style="color:red">\n                *Nombre de Usuario es requerido\n                      </p>\n                      </ion-item>\n\n                      <ion-item class="campo">\n                          <ion-input class="entrada" placeholder="Contraseña" type="password" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n                            <p style="color:red">\n                          *Contraseña invalida\n                          </p>\n                          <p *ngIf="(password.touched && userModel?.password?.length < 8)" style="color:red">\n                            *Contraseña debe tener por lo menos 8 caracteres\n                          </p>\n                          </ion-item>\n\n                          <ion-item class="campo">\n                              <ion-input class="entrada" placeholder="Confirmar Contraseña" appConfirmEqualValidator="password" type="password" [(ngModel)]="userModel.confirmPassword" formControlName="confirmPassword"></ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="(confirmPassword.hasError(\'required\') && confirmPassword.touched)">\n                                <p style="color:red">\n                            *Contraseña invalida\n                              </p>\n                              <p *ngIf="(confirmPassword.touched && userModel?.confirmPassword?.length < 8)" style="color:red">\n                                *Contraseña debe tener por lo menos 8 caracteres\n                              </p>\n                            </ion-item>\n                              <ion-item *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual">\n                                  <p style="color:red">\n                              *Contraseñas no son iguales\n                                  </p>\n                                  </ion-item>\n\n    <ion-item class="campo">\n      <ion-input class="entrada" placeholder="Correo" type="email" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n    </ion-item>\n      <ion-item *ngIf="(email.hasError(\'required\') && email.touched)">\n          <p style="color:red">\n          *Correo es requerido\n      </p>\n      </ion-item>\n\n      <ion-item class="campo">\n          <ion-input class="entrada" placeholder="Número Telefonico" type="number" [(ngModel)]="userModel.numeroTelefonico" formControlName="numeroTelefonico" ></ion-input>\n        </ion-item>\n          <ion-item *ngIf="numeroTelefonico.hasError(\'required\') && numeroTelefonico.touched ">\n              <p style="color:red">\n    *Telefono es requerido\n          </p>\n          </ion-item>\n\n  </ion-list>\n<ion-grid>\n<ion-row>\n<button type="submit"  [disabled]="formGroup.invalid" ion-button full color="light" (click)="crearCuenta($event, userModel)" >\n  Crear Cuenta\n</button>\n</ion-row>\n</ion-grid>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarcuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// @IonicPage()
var RecuperarcuentaPage = /** @class */ (function () {
    function RecuperarcuentaPage(navCtrl, navParams, formBuilder, api, alertCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
        this.confirmPassword = this.formGroup.controls['confirmPassword'];
    }
    RecuperarcuentaPage.prototype.ionViewDidLoad = function () { };
    RecuperarcuentaPage.prototype.ionViewWillEnter = function () {
    };
    RecuperarcuentaPage.prototype.ionViewWillLeave = function () { };
    RecuperarcuentaPage.prototype.ionViewWillUnload = function () { };
    RecuperarcuentaPage.prototype.guardaContrasena = function ($event, usr) {
        var _this = this;
        var title = '';
        var subTitle = '';
        this.userModel = usr;
        this.api.recuperarCuenta(usr).subscribe(function (data) {
            title = data.toString() === '1' ? 'Cuenta Recuperada' :
                data.toString() === '0' ? 'El correo no existe' :
                    'Ocurrio un error';
            subTitle = data.toString() === '1' ? 'Se recupero correctamente su cuenta!' :
                data.toString() === '0' ? 'El correo ' + _this.userModel.email + ' no existe' :
                    data.toString();
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            if (title == 'Cuenta Recuperada') {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                            }
                        }
                    }]
            });
            alert.present().then(function () {
            });
        }, function (error) {
            _this.toast = _this.toastController.create({
                message: error,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    RecuperarcuentaPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RecuperarcuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-recuperarcuenta',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/recuperarcuenta/recuperarcuenta.html"*/'  <ion-header>\n    <ion-navbar>\n      <ion-title>Recuperar Cuenta</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" src="/assets/imgs/user.png">\n    </div>\n  <form [formGroup]="formGroup">\n    <ion-list>\n      <ion-item class="campo">\n        <ion-input class="correo-input" placeholder="Correo" type="email" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="email.hasError(\'required\') && email.touched ">\n          <p style="color:red">\n*Valid email is required\n        </p>\n        </ion-item>\n      <ion-item class="campo">\n        <ion-input class="contraseña-input" placeholder="Contraseña" type="password" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n        <p style="color:red">\n    *Valid password is required\n        </p>\n        </ion-item>\n        <ion-item class="campo">\n          <ion-input class="confirm-input" placeholder="Confirmar contraseña" appConfirmEqualValidator="password" type="password" [(ngModel)]="userModel.confirmPassword" formControlName="confirmPassword"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="confirmPassword.hasError(\'required\') && confirmPassword.touched">\n          <p style="color:red">\n      *Valid password is required\n          </p>\n          </ion-item>\n          <ion-item *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual">\n            <p style="color:red">\n          *Passwords does not match\n              </p>\n              </ion-item>\n    </ion-list>\n<ion-grid>\n<ion-row>\n  <button type="submit"  [disabled]="formGroup.invalid" ion-button full  color="light" (click)="guardaContrasena($event, userModel)" >\n    Guardar Contrasena\n</button>\n</ion-row>\n</ion-grid>\n\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/recuperarcuenta/recuperarcuenta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], RecuperarcuentaPage);
    return RecuperarcuentaPage;
}());

//# sourceMappingURL=recuperarcuenta.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedidos_no_entregados_pedidos_no_entregados__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pedidos_entregados_pedidos_entregados__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pedidos_todos_pedidos_todos__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// @IonicPage()
var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_5__models_model__["c" /* User */]();
        this.pedidosTodos = __WEBPACK_IMPORTED_MODULE_6__pedidos_todos_pedidos_todos__["a" /* PedidosTodosPage */];
        this.pedidosEntregados = __WEBPACK_IMPORTED_MODULE_1__pedidos_entregados_pedidos_entregados__["a" /* PedidosEntregadosPage */];
        this.pedidosNoEntregados = __WEBPACK_IMPORTED_MODULE_0__pedidos_no_entregados_pedidos_no_entregados__["a" /* PedidosNoEntregadosPage */];
        this.userModel = navParams.get('item');
    }
    PedidosPage.prototype.ionViewDidLoad = function () { };
    PedidosPage.prototype.ionViewWillEnter = function () {
        this.afdb.list("pedidos/53").snapshotChanges().subscribe(function (data) {
            data.map(function (data) {
                var info = data.payload.val();
            });
        });
    };
    PedidosPage.prototype.ionViewWillLeave = function () { };
    PedidosPage.prototype.ionViewWillUnload = function () { };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos/pedidos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Listado de pedidos : {{userModel.nombreUsuario}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab title="Todos" [root]="pedidosTodos" tabIcon="podium">\n\n  </ion-tab>\n  <ion-tab title="Entregados" [root]="pedidosEntregados" tabIcon="podium">\n\n  </ion-tab>\n  <ion-tab title="No Entregados" [root]="pedidosNoEntregados" tabIcon="podium">\n\n  </ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos/pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosEntregadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage()
var PedidosEntregadosPage = /** @class */ (function () {
    function PedidosEntregadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedidosEntregadosPage.prototype.ionViewDidLoad = function () {
    };
    PedidosEntregadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos-entregados',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos-entregados/pedidos-entregados.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Entregados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <label>\n        <h2>Entregados</h2>\n    </label>\n    <ion-item-divider>\n        <ion-list>\n          <ion-item>\n              listar entregados\n          </ion-item>\n          <ion-item>\n            \n          </ion-item>\n        </ion-list>\n      </ion-item-divider>\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos-entregados/pedidos-entregados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PedidosEntregadosPage);
    return PedidosEntregadosPage;
}());

//# sourceMappingURL=pedidos-entregados.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosTodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_elstorapi_elstorapi__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @IonicPage()
var PedidosTodosPage = /** @class */ (function () {
    function PedidosTodosPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    PedidosTodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos-todos',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos-todos/pedidos-todos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Todos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <label>\n        <h2>Todos</h2>\n    </label>\n\n    <ion-item-divider>\n        <ion-list>\n          <ion-item>\n              Listados de Pedidos en el Sistema\n          </ion-item>\n          <!-- <ion-item>\n          </ion-item> -->\n          <!-- <ion-item class="text" *ngFor="let item of items | async">\n              {{item | json}}\n            </ion-item> -->\n        </ion-list>\n      </ion-item-divider>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/pedidos-todos/pedidos-todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */]])
    ], PedidosTodosPage);
    return PedidosTodosPage;
}());

//# sourceMappingURL=pedidos-todos.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inicio_inicio__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









// @IonicPage()
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, formBuilder, alertCtrl, api, toastController, camera, _sanitizer, actionSheetCtrl, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.toastController = toastController;
        this.camera = camera;
        this._sanitizer = _sanitizer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["c" /* User */]();
        this.isDisabled = true;
        this.formGroup = formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(8)]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            apellidoPaterno: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            apellidoMaterno: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            nombreUsuario: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            numeroTelefonico: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
        this.nombre = this.formGroup.controls['nombre'];
        this.apellidoPaterno = this.formGroup.controls['apellidoPaterno'];
        this.apellidoMaterno = this.formGroup.controls['apellidoMaterno'];
        this.nombreUsuario = this.formGroup.controls['nombreUsuario'];
        this.confirmPassword = this.formGroup.controls['confirmPassword'];
        this.numeroTelefonico = this.formGroup.controls['numeroTelefonico'];
        this.userModel = navParams.get('item');
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.userModel.fotografia);
    }
    PerfilPage.prototype.ionViewDidLoad = function () { };
    PerfilPage.prototype.ionViewWillEnter = function () {
    };
    PerfilPage.prototype.ionViewWillLeave = function () { };
    PerfilPage.prototype.ionViewWillUnload = function () { };
    PerfilPage.prototype.editarPerfil = function () {
        this.isDisabled = !this.isDisabled;
    };
    PerfilPage.prototype.guardarCambios = function ($event, usr) {
        var _this = this;
        this.userModel = usr;
        // this.userModel.fotografia = this.imgSource;
        this.toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Perfil Actualizado',
            subTitle: 'Perfil Actualizado correctamente!',
            buttons: ['Dismiss']
        });
        var loader = this.loadingCtrl.create({
            content: 'Actualizando perfil...'
        });
        loader.present().then(function () {
            _this.api.actualizarCuenta(_this.userModel).subscribe(function (data) {
                if (data.toString() === '0') {
                    _this.toast.present().then(function () {
                        _this.toast.dismiss();
                    });
                }
                if (data.toString() === '1') {
                    alert.present().then(function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__inicio_inicio__["a" /* InicioPage */], { item: _this.userModel });
                        _this.remove('usuario').then(function () {
                            _this.set('usuario', _this.userModel).then(function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__inicio_inicio__["a" /* InicioPage */], { item: _this.userModel });
                                loader.dismiss();
                            });
                        });
                    });
                }
                loader.dismiss();
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    PerfilPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    PerfilPage.prototype.capturarFoto = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.userModel.fotografia = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.userModel.fotografia);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    PerfilPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFoto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    PerfilPage.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("setting:" + settingName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PerfilPage.prototype.set = function (settingName, value) {
        return this.storage.set("setting:" + settingName, value);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" [src]="fotografia"  onError= "this.src=\'/assets/imgs/user.png\'" >\n        <button color="light" class="camara" [disabled]="isDisabled" ion-button icon-only (click)="presentActionSheet()">\n            <ion-icon class="icono" name="camera"></ion-icon>\n        </button>\n    </div>\n  <form [formGroup]="formGroup">\n    <ion-list class="lista">\n      <ion-item class="campo">\n        <ion-input class="entrada" placeholder="Nombre" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.nombre" formControlName="nombre" ></ion-input>\n      </ion-item>\n            <ion-item *ngIf="nombre.hasError(\'required\') && nombre.touched ">\n              <p style="color:red">\n      *Valid Name is required\n            </p>\n            </ion-item>\n\n            <ion-item class="campo">\n                <ion-input class="entrada" placeholder="Apellido Paterno" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.apellidoPaterno" formControlName="apellidoPaterno" ></ion-input>\n              </ion-item>\n                <ion-item *ngIf="apellidoPaterno.hasError(\'required\') && apellidoPaterno.touched ">\n                  <p style="color:red">\n          *Valid Name is required\n                </p>\n                </ion-item>\n\n                <ion-item class="campo">\n                    <ion-input class="entrada" placeholder="Apellido Materno" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.apellidoMaterno" formControlName="apellidoMaterno" ></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="apellidoMaterno.hasError(\'required\') && apellidoMaterno.touched ">\n                      <p style="color:red">\n              *Valid Name is required\n                    </p>\n                    </ion-item>\n\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Nombre de Usuario" type="text" [disabled]="isDisabled" [(ngModel)]="userModel.nombreUsuario" formControlName="nombreUsuario" ></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="nombreUsuario.hasError(\'required\') && nombreUsuario.touched ">\n                          <p style="color:red">\n                  *Valid User Name is required\n                        </p>\n                        </ion-item>\n\n                        <ion-item class="campo">\n                            <ion-input class="entrada" placeholder="Contraseña" type="password" [disabled]="isDisabled" [(ngModel)]="userModel.password" formControlName="password"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n                            <p style="color:red">\n                        *Type a valid password\n                            </p>\n                            </ion-item>\n\n                            <ion-item class="campo">\n                                <ion-input class="entrada" placeholder="Confirmar Contraseña" appConfirmEqualValidator="password" type="password" [disabled]="isDisabled" [(ngModel)]="userModel.confirmPassword" formControlName="confirmPassword"></ion-input>\n                              </ion-item>\n                              <ion-item *ngIf="confirmPassword.hasError(\'required\') && confirmPassword.touched">\n                                <p style="color:red">\n                            *Type a valid password\n                                </p>\n                                </ion-item>\n                                <ion-item *ngIf="confirmPassword.touched && confirmPassword.errors?.notEqual">\n                                  <p style="color:red">\n                                *Passwords does not match\n                                    </p>\n                                    </ion-item>\n\n      <ion-item class="campo">\n        <ion-input class="entrada" placeholder="Correo" type="email" disabled="true" [(ngModel)]="userModel.email" formControlName="email" ></ion-input>\n      </ion-item>\n        <ion-item *ngIf="(email.hasError(\'required\') && email.touched)">\n          <p style="color:red">\n  *Valid email is required\n        </p>\n        </ion-item>\n\n        <ion-item class="campo">\n            <ion-input class="entrada" placeholder="Numero Telefonico" type="number" disabled="true" [(ngModel)]="userModel.numeroTelefonico" formControlName="numeroTelefonico" ></ion-input>\n          </ion-item>\n            <ion-item *ngIf="numeroTelefonico.hasError(\'required\') && numeroTelefonico.touched ">\n              <p style="color:red">\n      *Valid phone number is required\n            </p>\n            </ion-item>\n            <br/>\n    </ion-list>\n  <ion-grid>\n    <ion-row>\n        <button ion-button full color="light" (click)="editarPerfil()" >\n            Editar Perfil\n        </button>\n    </ion-row>\n  <ion-row>\n  <button type="submit"  [disabled]="formGroup.invalid" ion-button full color="light" (click)="guardarCambios($event, userModel)" >\n    Guardar cambios\n  </button>\n  </ion-row>\n  </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(api, navParams, geolocation) {
        this.api = api;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.negocioModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* Negocio */]();
        this.negocioModel = navParams.get('item');
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(_this.negocioModel.latitud, _this.negocioModel.longitud);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                markerLabel: _this.negocioModel.callenumero
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                title: _this.negocioModel.nombre
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Como llegar a : {{negocioModel.nombre}} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-content>\n    <agm-map [streetViewControl]="false" [disableDefaultUI]="true" [latitude]="map.lat" [longitude]="map.lng" [zoom]="map.zoom">\n\n  </agm-map> -->\n  <ion-content>\n    <h4 class="titNeg">Horario : {{negocioModel.horaapertura}} - {{negocioModel.horacierre}}</h4>\n      <div #map id="map"></div>\n    </ion-content>\n\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioAgregarProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negocio_detalle_negocio_detalle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// @IonicPage()
var NegocioAgregarProductoPage = /** @class */ (function () {
    function NegocioAgregarProductoPage(formBuilder, loadingCtrl, toastController, alertCtrl, api, camera, navParams, navCtrl, actionSheetCtrl, _sanitizer) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.camera = camera;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_1__models_model__["c" /* User */]();
        this.producto = new __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* Producto */]();
        this.imgSource = '/assets/imgs/producto.png';
        this.editar = false;
        this.cameraImg = null;
        this.base64 = 'data:image/jpeg;base64,';
        this.formGroup = formBuilder.group({
            platillo: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            tiempopreparacion: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            catproducto: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]],
            otracategoria: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];
        this.tiempopreparacion = this.formGroup.controls['tiempopreparacion'];
        this.catproducto = this.formGroup.controls['catproducto'];
        this.otracategoria = this.formGroup.controls['otracategoria'];
        this.userModel = navParams.get('item');
        this.producto.negocioid = this.userModel.clientid;
    }
    NegocioAgregarProductoPage.prototype.ionViewDidLoad = function () { };
    NegocioAgregarProductoPage.prototype.ionViewWillEnter = function () {
        this.obtnerCatProductoPorIdCatNegocio();
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.producto.fotografia);
    };
    NegocioAgregarProductoPage.prototype.ionViewWillLeave = function () { };
    NegocioAgregarProductoPage.prototype.ionViewWillUnload = function () { };
    NegocioAgregarProductoPage.prototype.agregarProducto = function (prod, biz, $event) {
        var _this = this;
        if (prod.id_catProducto === undefined
            || (prod.complemento === null || prod.complemento.replace(/ /g, "").toLowerCase() == "")
            || (prod.descripcion === null || prod.descripcion.replace(/ /g, "").toLowerCase() == "")) {
            this.toast = this.toastController.create({
                message: 'Todos los campos son obligatorios!',
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Done'
            });
            this.toast.present();
            return;
        }
        var message = "Agregando Producto..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        this.producto = prod;
        // this.producto.fotografia = this.imgSource;
        this.toast = this.toastController.create({
            message: 'Ocurrio un error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Producto Agregado',
            subTitle: 'Producto Agregado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: _this.userModel });
                    }
                }]
        });
        loader.present().then(function () {
            _this.api.agregarProducto(_this.producto).subscribe(function (data) {
                if (data !== null) {
                    alert.present().then(function () {
                        loader.dismiss();
                    });
                }
                else {
                    _this.toast.present().then(function () {
                        _this.toast.dismiss();
                        loader.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                loader.dismiss();
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
        // console.log(prod,biz)
    };
    NegocioAgregarProductoPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NegocioAgregarProductoPage.prototype.capturarFotoProducto = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true,
            sourceType: source
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.producto.fotografia = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.producto.fotografia);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    NegocioAgregarProductoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFotoProducto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFotoProducto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NegocioAgregarProductoPage.prototype.obtnerCatProductoPorIdCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Obteniendo categorias para el producto...'
        });
        var toast = this.toastController.create({
            message: 'Error obteniendo categorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.obtnerCatProductoPorIdCatNegocio(_this.userModel.negocio[0]).subscribe(function (data) {
                if (data !== null) {
                    _this.catProd = data;
                    loader.dismiss();
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                        loader.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NegocioAgregarProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-negocio-agregar-producto',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-agregar-producto/negocio-agregar-producto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Agrega un producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n      <img src="/assets/imgs/ElEstorLogoCuadroyAza.png" alt="" class="center">\n  \n  <h3>Datos del producto</h3>\n\n            <form [formGroup]="formGroup">\n                \n                <div class="producto">\n                    <img class="imgPro" [src]="fotografia" onError="this.src=\'/assets/imgs/producto.png\'">\n                    <button color="light" class="camara" ion-button icon-only (click)="presentActionSheet()">\n                        <ion-icon class="icono" name="camera"></ion-icon>\n                    </button>\n                </div>\n              <ion-list>\n              <ion-item class="campo">\n                  <ion-input class="entrada" placeholder="Nombre del Platillo" [disabled]="editar" type="text" [(ngModel)]="producto.nombre" formControlName="platillo" ></ion-input>\n                </ion-item>\n                <ion-item *ngIf="platillo.hasError(\'required\') && platillo.touched">\n                  <p style="color:red">\n              *Falta Nombre del platillo\n                  </p>\n                  </ion-item>\n                  <ion-item class="campo"> \n                      <ion-input class="entrada" placeholder="Precio" [disabled]="editar" type="number"  [(ngModel)]="producto.precio" formControlName="precio"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="precio.hasError(\'required\') && precio.touched">\n                      <p style="color:red">\n                *Falta Precio\n                    </p>\n                    </ion-item>\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Descripción" [disabled]="editar" type="text" [(ngModel)]="producto.descripcion" formControlName="descripcion"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                        <p style="color:red">\n                    *Falta Descripcion\n                        </p>\n                        </ion-item>\n                        <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Complementos" [disabled]="editar" type="text" [(ngModel)]="producto.complemento" formControlName="descripcion"></ion-input>\n                      </ion-item>\n                        <ion-item class="campo"> \n                        <ion-input class="entrada" placeholder="Tiempo de preparacion" [disabled]="editar" type="number"  [(ngModel)]="producto.tiempopreparacion" formControlName="tiempopreparacion"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="tiempopreparacion.hasError(\'required\') && tiempopreparacion.touched">\n                      <p style="color:red">\n                  *Falta Tiempo de Preparacion\n                      </p>\n                      </ion-item>\n                      <ion-item class="campo">\n                        <ion-label>\n                          Categoria del Producto\n                        </ion-label>\n                        <ion-select [(ngModel)]="producto.id_catProducto " formControlName="catproducto" placeholder="Selecciona una Categoria">\n                            <ion-option value="{{cat.id_catProducto}}"  *ngFor="let cat of catProd">{{cat.nombre}}</ion-option>\n                          </ion-select>\n                      </ion-item>\n                      <ion-item class="campo">\n                        <ion-label>\n                          Otra Categoria\n                        </ion-label>\n                        <ion-input class="entrada" placeholder="Otra Categoria" [disabled]="editar" type="text"  [(ngModel)]="producto.otracategoria" formControlName="otracategoria"></ion-input>\n                      </ion-item>\n                         <ion-item *ngIf="otracategoria.hasError(\'required\') && otracategoria.touched">\n                      <p style="color:red">\n                      *Falta Otra Categoria\n                      </p>\n                      </ion-item>\n            </ion-list>\n          </form>\n\n        <ion-grid>\n  \n        <ion-row>\n              <!-- <ion-fab bottom right>\n        <button ion-fab (click)="agregarProducto($event)">+</button>\n    </ion-fab> -->\n    <!-- <ion-fab vertical="top" horizontal="end" slot="fixed">\n        <ion-fab-button>\n          <ion-icon name="add"></ion-icon>\n        </ion-fab-button>\n      </ion-fab> -->\n<!-- <button ion-button full color="light" (click)="agregarProducto($event)" >\n    Agregar Producto\n  </button> -->\n            <!-- [disabledd]="formGroup.invalid"\n        <button [disabled]="editar" type="submit"  ion-button full color="light" (click)="guardarNegocio($event, negocio)" >\n          Guardar  Negocio\n        </button> -->\n            <!-- <button [disabled]="formGroup.invalid" type="submit" ion-button full color="light" (click)="agregarProducto(producto,$event)" > -->\n                <button  type="submit" ion-button full color="light" (click)="agregarProducto(producto,$event)" >\n              Guardar Producto\n            </button>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-agregar-producto/negocio-agregar-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NegocioAgregarProductoPage);
    return NegocioAgregarProductoPage;
}());

//# sourceMappingURL=negocio-agregar-producto.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioEditarProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__negocio_detalle_negocio_detalle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NegocioEditarProductoPage = /** @class */ (function () {
    function NegocioEditarProductoPage(formBuilder, loadingCtrl, toastController, alertCtrl, api, camera, navParams, _sanitizer, navCtrl, actionSheetCtrl) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.camera = camera;
        this.navParams = navParams;
        this._sanitizer = _sanitizer;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_2__models_model__["c" /* User */]();
        this.producto = new __WEBPACK_IMPORTED_MODULE_2__models_model__["b" /* Producto */]();
        this.imgSource = '/assets/imgs/producto.png';
        this.editar = false;
        this.cameraImg = null;
        this.base64 = 'data:image/jpeg;base64,';
        this.formGroup = formBuilder.group({
            platillo: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            tiempopreparacion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            catproducto: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            otracategoria: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]],
            complemento: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]]
        });
        this.platillo = this.formGroup.controls['platillo'];
        this.descripcion = this.formGroup.controls['descripcion'];
        this.precio = this.formGroup.controls['precio'];
        this.cantidad = this.formGroup.controls['cantidad'];
        this.tiempopreparacion = this.formGroup.controls['tiempopreparacion'];
        this.catproducto = this.formGroup.controls['catproducto'];
        this.otracategoria = this.formGroup.controls['otracategoria'];
        this.complemento = this.formGroup.controls['complemento'];
        this.userModel = navParams.get('item');
        this.producto = navParams.get('item2');
        // // this.imgSource = this.producto.fotografia !== '/assets/imgs/producto.png' ? 
        // // this._sanitizer.bypassSecurityTrustResourceUrl(this.producto.fotografia): this.imgSource;
        // if(this.producto.fotografia !== '/assets/imgs/producto.png')
        // {
        //   this.imgSource = this.producto.fotografia;
        //   this._sanitizer.bypassSecurityTrustResourceUrl(this.imgSource);
        // }
        // // this.producto.fotografia !== '/assets/imgs/producto.png' ? 
        // // this._sanitizer.bypassSecurityTrustResourceUrl(this.producto.fotografia): this.imgSource;
    }
    NegocioEditarProductoPage.prototype.ionViewDidLoad = function () { };
    NegocioEditarProductoPage.prototype.ionViewWillEnter = function () {
        this.obtnerCatProductoPorIdCatNegocio();
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.producto.fotografia);
    };
    NegocioEditarProductoPage.prototype.ionViewWillLeave = function () { };
    NegocioEditarProductoPage.prototype.ionViewWillUnload = function () { };
    NegocioEditarProductoPage.prototype.agregarProducto = function (prod, biz, $event) {
        var _this = this;
        if (prod.id_catProducto === undefined
            || (prod.complemento === null || prod.complemento.replace(/ /g, "").toLowerCase() == "")
            || (prod.descripcion === null || prod.descripcion.replace(/ /g, "").toLowerCase() == "")) {
            this.toast = this.toastController.create({
                message: 'Todos los campos son obligatorios!',
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Done'
            });
            this.toast.present();
            return;
        }
        var message = "Editando producto...";
        var loader = this.loadingCtrl.create({
            content: message
        });
        this.producto = prod;
        this.toast = this.toastController.create({
            message: 'Ocurrio un error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        var alert = this.alertCtrl.create({
            title: 'Producto Editado',
            subTitle: 'Producto Editado correctamente!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: _this.userModel });
                    }
                }]
        });
        loader.present().then(function () {
            _this.api.editarProducto(_this.producto).subscribe(function (data) {
                if (data !== null) {
                    alert.present().then(function () {
                        loader.dismiss();
                    });
                }
                else {
                    _this.toast.present().then(function () {
                        loader.dismiss();
                        _this.toast.dismiss();
                    });
                }
            }, function (error) {
                loader.dismiss();
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NegocioEditarProductoPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NegocioEditarProductoPage.prototype.capturarFotoProducto = function (source) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true,
            sourceType: source
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            imageData = escape(imageData);
            _this.producto.fotografia = 'data:image/jpeg;base64,' + imageData;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.producto.fotografia);
        }, function (err) {
            _this.toast = _this.toastController.create({
                message: err,
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            _this.toast.onDidDismiss(function () {
            });
            _this.toast.present().then(function () {
            });
        });
    };
    NegocioEditarProductoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Abrir galeria',
                    handler: function () {
                        _this.capturarFotoProducto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camera',
                    handler: function () {
                        _this.capturarFotoProducto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NegocioEditarProductoPage.prototype.obtnerCatProductoPorIdCatNegocio = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        var toast = this.toastController.create({
            message: 'Error obteniendo categorias...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        loader.present().then(function () {
            _this.api.obtnerCatProductoPorIdCatNegocio(_this.userModel.negocio[0]).subscribe(function (data) {
                if (data !== null) {
                    _this.catProd = data;
                    loader.dismiss();
                }
                else {
                    toast.present().then(function () {
                        toast.dismiss();
                        loader.dismiss();
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
            loader.dismiss();
        });
    };
    NegocioEditarProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-negocio-editar-producto',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-editar-producto/negocio-editar-producto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n      <img src="/assets/imgs/ElEstorLogoCuadroyAza.png" alt="" class="center">\n  \n  <h3>Datos del producto</h3>\n\n            <form [formGroup]="formGroup">\n                \n                <div class="producto">\n                    <img class="imgPro" [src]="fotografia" onError="this.src=\'/assets/imgs/producto.png\'">\n                    <button color="light" class="camara" ion-button icon-only (click)="presentActionSheet()">\n                        <ion-icon class="icono" name="camera"></ion-icon>\n                    </button>\n                </div>\n              <ion-list>\n              <ion-item class="campo">\n                  <ion-input class="entrada" placeholder="Nombre del Platillo" [disabled]="editar" type="text" [(ngModel)]="producto.nombre" formControlName="platillo" ></ion-input>\n                </ion-item>\n                <ion-item *ngIf="platillo.hasError(\'required\') && platillo.touched">\n                  <p style="color:red">\n              *Falta Nombre del platillo\n                  </p>\n                  </ion-item>\n                  <ion-item class="campo"> \n                      <ion-input class="entrada" placeholder="Precio" [disabled]="editar" type="number"  [(ngModel)]="producto.precio" formControlName="precio"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="precio.hasError(\'required\') && precio.touched">\n                      <p style="color:red">\n                *Falta Precio\n                    </p>\n                    </ion-item>\n                    <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Descripción" [disabled]="editar" type="text" [(ngModel)]="producto.descripcion" formControlName="descripcion"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="descripcion.hasError(\'required\') && descripcion.touched">\n                        <p style="color:red">\n                    *Falta Descripcion\n                        </p>\n                        </ion-item>\n                        <ion-item class="campo">\n                        <ion-input class="entrada" placeholder="Complementos" [disabled]="editar" type="text" [(ngModel)]="producto.complemento" formControlName="complemento"></ion-input>\n                      </ion-item>\n                        <ion-item class="campo"> \n                        <ion-input class="entrada" placeholder="Tiempo de preparacion" [disabled]="editar" type="number"  [(ngModel)]="producto.tiempopreparacion" formControlName="tiempopreparacion"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="tiempopreparacion.hasError(\'required\') && tiempopreparacion.touched">\n                      <p style="color:red">\n                  *Falta Tiempo de Preparacion\n                      </p>\n                      </ion-item>\n                      <ion-item class="campo">\n                        <ion-label>\n                          Categoria del Producto\n                        </ion-label>\n                        <ion-select [(ngModel)]="producto.id_catProducto " formControlName="catproducto" placeholder="Selecciona una Categoria">\n                            <ion-option value="{{cat.id_catProducto}}"  *ngFor="let cat of catProd">{{cat.nombre}}</ion-option>\n                          </ion-select>\n                      </ion-item>\n                      <ion-item class="campo">\n                        <ion-label>\n                          Otra Categoria\n                        </ion-label>\n                        <ion-input class="entrada" placeholder="Otra Categoria" [disabled]="editar" type="text"  [(ngModel)]="producto.otracategoria" formControlName="otracategoria"></ion-input>\n                      </ion-item>\n                         <ion-item *ngIf="otracategoria.hasError(\'required\') && otracategoria.touched">\n                      <p style="color:red">\n                      *Falta Otra Categoria\n                      </p>\n                      </ion-item>\n            </ion-list>\n          </form>\n\n        <ion-grid>\n  \n        <ion-row>\n              <!-- <ion-fab bottom right>\n        <button ion-fab (click)="agregarProducto($event)">+</button>\n    </ion-fab> -->\n    <!-- <ion-fab vertical="top" horizontal="end" slot="fixed">\n        <ion-fab-button>\n          <ion-icon name="add"></ion-icon>\n        </ion-fab-button>\n      </ion-fab> -->\n<!-- <button ion-button full color="light" (click)="agregarProducto($event)" >\n    Agregar Producto\n  </button> -->\n            <!-- [disabledd]="formGroup.invalid"\n        <button [disabled]="editar" type="submit"  ion-button full color="light" (click)="guardarNegocio($event, negocio)" >\n          Guardar  Negocio\n        </button> -->\n            <!-- <button [disabled]="formGroup.invalid" type="submit" ion-button full color="light" (click)="agregarProducto(producto,$event)" > -->\n                <button  type="submit" ion-button full color="light" (click)="agregarProducto(producto,$event)" >\n              Guardar Producto\n            </button>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-editar-producto/negocio-editar-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], NegocioEditarProductoPage);
    return NegocioEditarProductoPage;
}());

//# sourceMappingURL=negocio-editar-producto.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(108);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalPedidoPage = /** @class */ (function () {
    function ModalPedidoPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.info = {
            cliente: {
                nombre: "",
                apellidoPat: "",
                apellidoMat: ""
            },
            subtotal: 0
        };
        this.productos = [];
        this.rechazado = false;
    }
    ModalPedidoPage.prototype.ionViewDidLoad = function () {
        var data = this.navParams.get('data');
        this.info = data;
        console.log(this.info);
        this.productos = data['productos'];
    };
    ModalPedidoPage.prototype.rechazar = function () {
        this.rechazado = true;
    };
    ModalPedidoPage.prototype.aceptar = function () {
        var _this = this;
        this.afdb.database.ref("ubicacion").once("value", function (ubicacion) {
            var origen = {
                lat: _this.productos[0]['latitud'],
                lng: _this.productos[0]['longitud'],
            };
            var ubicaciones = [];
            for (var key in ubicacion.val()) {
                ubicaciones.push(__assign({}, ubicacion.val()[key], { id: key }));
            }
            var distancias = _this.getAllDistance(ubicaciones, origen);
            distancias.then(function (data) {
                var menor = 0;
                var key = 0;
                data.map(function (data, index) {
                    if (data['response']['status'] == "OK") {
                        if (index == 0) {
                            menor = data['response']['distance']['value'];
                            key = data['key'];
                        }
                        else {
                            if (menor > data['response']['distance']['value']) {
                                menor = data['response']['distance']['value'];
                                key = data['key'];
                            }
                        }
                    }
                });
                console.log(menor);
                console.log(key);
            });
        });
    };
    ModalPedidoPage.prototype.getDistance = function (start, end) {
        var origin = new google.maps.LatLng(start['lat'], start['lng']);
        var final = new google.maps.LatLng(end['lat'], end['lng']);
        var service = new google.maps.DistanceMatrixService();
        return new Promise(function (resolve, reject) {
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [final],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC
            }, function (response, status) {
                if (status === 'OK') {
                    resolve({
                        response: response.rows[0].elements[0],
                        key: start['id']
                    });
                }
                else {
                    reject(new Error('Not OK'));
                }
            });
        });
    };
    ModalPedidoPage.prototype.getAllDistance = function (starts, end) {
        var _this = this;
        var promisedDistances = starts.map(function (start) { return _this.getDistance(start, end); });
        // Promise.all turns an array of promises into a promise
        // that resolves to an array.
        return Promise.all(promisedDistances);
    };
    ModalPedidoPage.prototype.enviarInfo = function () {
    };
    ModalPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-pedido',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/modal-pedido/modal-pedido.html"*/'<!--\n  Generated template for the ModalPedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Nuevo Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="!rechazado">\n\n    <h3 class="titulo">Pedido</h3>\n    <span class="parrafo" *ngFor="let producto of productos">{{producto.cantidadCarrito}} {{producto.nombre}}</span>\n    <h3 class="titulo2">Cliente</h3>\n    <span class="parrafo">{{info.cliente.apellidoPat}} {{info.cliente.apellidoMat}} {{info.cliente.nombre}}</span>\n    <h3 class="titulo">Costo</h3>\n    <span class="parrafo">$ {{info.subtotal}}</span>\n    \n    <div class="opcion">\n      <button ion-button color="light" (click)="rechazar()">Rechazar</button>\n      <button ion-button color="dark" (click)="aceptar()">Aceptar</button>\n    </div>\n\n  </div>\n\n\n<div *ngIf="rechazado">\n    <ion-item class="mensaje">\n        <ion-label color="primary" floating>¿Por cual motivo lo rechazo?</ion-label>\n        <ion-textarea clas></ion-textarea>\n      </ion-item>\n      <button class="enviar" ion-button color="dark" (click)="enviarInfo()">Enviar</button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/modal-pedido/modal-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ModalPedidoPage);
    return ModalPedidoPage;
}());

//# sourceMappingURL=modal-pedido.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(505);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pedidos_no_entregados_pedidos_no_entregados__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_negocio_detalle_editar_negocio_detalle_editar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_negocio_agregar_producto_negocio_agregar_producto__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_negocio_detalle_negocio_detalle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_nuevonegocio_nuevonegocio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_negocios_negocios__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_recuperarcuenta_recuperarcuenta__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_password_validator__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pedidos_pedidos__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_pedidos_todos_pedidos_todos__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pedidos_entregados_pedidos_entregados__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modal_pedido_modal_pedido__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_fire__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_fire_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__config__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_negocio_editar_producto_negocio_editar_producto__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_recuperarcuenta_recuperarcuenta__["a" /* RecuperarcuentaPage */],
                __WEBPACK_IMPORTED_MODULE_21__shared_password_validator__["a" /* ConfirmEqualValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_negocios_negocios__["a" /* NegociosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_negocio_agregar_producto_negocio_agregar_producto__["a" /* NegocioAgregarProductoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_negocio_detalle_editar_negocio_detalle_editar__["a" /* NegocioDetalleEditarPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pedidos_todos_pedidos_todos__["a" /* PedidosTodosPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_pedidos_entregados_pedidos_entregados__["a" /* PedidosEntregadosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_pedidos_no_entregados_pedidos_no_entregados__["a" /* PedidosNoEntregadosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_pedido_modal_pedido__["a" /* ModalPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_negocio_editar_producto_negocio_editar_producto__["a" /* NegocioEditarProductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal-pedido/modal-pedido.module#ModalPedidoPageModule', name: 'ModalPedidoPage', segment: 'modal-pedido', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyC49V2M_OYaf8GfKsXN6_Nk-pf50Y5ulcA' }),
                __WEBPACK_IMPORTED_MODULE_29__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_31__config__["a" /* fireBaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_30__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_recuperarcuenta_recuperarcuenta__["a" /* RecuperarcuentaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_negocios_negocios__["a" /* NegociosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_negocio_agregar_producto_negocio_agregar_producto__["a" /* NegocioAgregarProductoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_negocio_detalle_editar_negocio_detalle_editar__["a" /* NegocioDetalleEditarPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pedidos_todos_pedidos_todos__["a" /* PedidosTodosPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_pedidos_entregados_pedidos_entregados__["a" /* PedidosEntregadosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_pedidos_no_entregados_pedidos_no_entregados__["a" /* PedidosNoEntregadosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_pedido_modal_pedido__["a" /* ModalPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_negocio_editar_producto_negocio_editar_producto__["a" /* NegocioEditarProductoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_30__angular_fire_database__["a" /* AngularFireDatabase */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_10__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inicio_inicio__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuevonegocio_nuevonegocio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negocio_detalle_editar_negocio_detalle_editar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__negocio_agregar_producto_negocio_agregar_producto__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__negocio_editar_producto_negocio_editar_producto__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// @IonicPage()
var NegocioDetallePage = /** @class */ (function () {
    function NegocioDetallePage(navCtrl, navParams, geolocation, api, _sanitizer, alertCtrl, toastController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.api = api;
        this._sanitizer = _sanitizer;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]();
        this.mostrarDiv = false;
        this.userModel = navParams.get('item');
        this.userModel === undefined ? this.userModel = new __WEBPACK_IMPORTED_MODULE_4__models_model__["c" /* User */]() : this.userModel;
    }
    NegocioDetallePage.prototype.ionViewDidLoad = function () { };
    NegocioDetallePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.userModel.negocio[0] !== undefined) {
            this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.userModel.negocio[0].fotografia);
            this.fotografia2 = this._sanitizer.bypassSecurityTrustUrl("" + this.userModel.negocio[0].fotografia2);
            this.cargarProducto();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Agrega un negocio',
                subTitle: "Aun no tienes ninguno negocio registrado!",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */], { item: _this.userModel });
                        },
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__inicio_inicio__["a" /* InicioPage */], { item: _this.userModel });
                        }
                    }
                ]
            });
            alert_1.present().then(function () {
            });
        }
    };
    NegocioDetallePage.prototype.ionViewWillLeave = function () { };
    NegocioDetallePage.prototype.ionViewWillUnload = function () { };
    NegocioDetallePage.prototype.agregarProducto = function (biz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__negocio_agregar_producto_negocio_agregar_producto__["a" /* NegocioAgregarProductoPage */], { item: this.userModel });
    };
    NegocioDetallePage.prototype.verMapa = function (biz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], { item: biz });
    };
    NegocioDetallePage.prototype.editarNegocio = function ($event, bz) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__negocio_detalle_editar_negocio_detalle_editar__["a" /* NegocioDetalleEditarPage */], { item: this.userModel });
    };
    NegocioDetallePage.prototype.cargarProducto = function () {
        var _this = this;
        var message = "Obteniendo Productos..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        try {
            loader.present().then(function () {
                _this.api.getProductos(_this.userModel.negocio[0]).subscribe(function (data) {
                    if (data !== null) {
                        loader.dismiss();
                        _this.productos = data;
                    }
                    else {
                        loader.dismiss();
                        _this.toast = _this.toastController.create({
                            message: 'Ocurrio un error obteniendo productos..',
                            showCloseButton: true,
                            position: 'bottom',
                            closeButtonText: 'Ok'
                        });
                        _this.toast.onDidDismiss(function () {
                        });
                        _this.toast.present().then(function () {
                        });
                    }
                }, function (error) {
                    _this.toast = _this.toastController.create({
                        message: error,
                        showCloseButton: true,
                        position: 'bottom',
                        closeButtonText: 'Ok'
                    });
                    _this.toast.onDidDismiss(function () {
                    });
                    _this.toast.present().then(function () {
                    });
                });
            });
        }
        catch (error) {
        }
    };
    NegocioDetallePage.prototype.borrarProducto = function (prod) {
        var _this = this;
        var message = "Borrando Producto..";
        var loader = this.loadingCtrl.create({
            content: message
        });
        loader.present().then(function () {
            _this.api.borrarProducto(prod).subscribe(function (data) {
                if (data !== null) {
                    _this.productos = data;
                    loader.dismiss();
                }
                else {
                    loader.dismiss();
                    _this.toast = _this.toastController.create({
                        message: 'Ocurrio un error borrando el producto...',
                        showCloseButton: true,
                        position: 'bottom',
                        closeButtonText: 'Ok'
                    });
                    _this.toast.onDidDismiss(function () {
                    });
                    _this.toast.present().then(function () {
                    });
                }
            }, function (error) {
                _this.toast = _this.toastController.create({
                    message: error,
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: 'Ok'
                });
                _this.toast.onDidDismiss(function () {
                });
                _this.toast.present().then(function () {
                });
            });
        });
    };
    NegocioDetallePage.prototype.editarProducto = function (prod) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__negocio_editar_producto_negocio_editar_producto__["a" /* NegocioEditarProductoPage */], { item: this.userModel, item2: prod });
    };
    NegocioDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'page-negocio-detalle',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-detalle/negocio-detalle.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{userModel.negocio[0] !== undefined ? userModel.negocio[0].nombre: \'\'}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [scrollEvents]="true">\n\n    <div class="contBanner">\n        <img class=banner [src]="fotografia" alt="" onError="this.src=\'/assets/imgs/tienda-online-icono-png.png\'">\n        <div class="contLogo">\n          <img class=logo [src]="fotografia2" alt="" onError="this.src=\'/assets/imgs/tienda-online-icono-png.png\'">\n        </div>\n    </div>\n      <ion-item-divider >\n        <button ion-button full color="light" (click)="editarNegocio(userModel.negocio[0])" >\n            Editar Perfil del Negocio\n          </button>\n      </ion-item-divider>\n\n    <button ion-button clear (click)="verMapa(userModel.negocio[0])" >Ubicación y Horario</button>\n    <h2 class="titNeg">Mis Productos</h2> \n  \n    <ion-list [virtualScroll]="productos" [approxItemHeight]="\'132px\'">\n      <ion-item-sliding *virtualItem="let prod " class="contNeg">\n          <ion-item>\n            <ion-thumbnail item-start class="logoProd">\n              <img [src]="prod.fotografia" onError="this.src=\'/assets/imgs/producto.png\'" class="logimg">\n            </ion-thumbnail>\n            <h2 class="nombreNeg">{{prod.nombre}}</h2>\n            <div class="contenedorEstrellas">\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n                <ion-icon class="estrella" name=\'star\'></ion-icon>\n              </div>\n          </ion-item>\n            <ion-item-options>\n              <button ion-button color="danger" (click)="borrarProducto(prod)" > Borrar</button>\n              <button ion-button color="gray" (click)="editarProducto(prod)" > Editar</button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n  <ion-fab right bottom (click)="agregarProducto(userModel.negocio[0])">\n      <button ion-fab ><ion-icon class="more" name="add"></ion-icon></button>\n  </ion-fab> \n\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocio-detalle/negocio-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */]])
    ], NegocioDetallePage);
    return NegocioDetallePage;
}());

//# sourceMappingURL=negocio-detalle.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nuevonegocio_nuevonegocio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_elstorapi_elstorapi__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__negocio_detalle_negocio_detalle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// @IonicPage()
var NegociosPage = /** @class */ (function () {
    function NegociosPage(navCtrl, navParams, api, alertCtrl, loadingCtrl, toastController, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this._sanitizer = _sanitizer;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["c" /* User */]();
        this.negocioModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["a" /* Negocio */]();
        this.mostrarDiv = false;
        this.clientid = '';
        this.message = "Obteniendo listado de negocios..";
        this.imgSourceNeg = '/assets/imgs/tienda-online-icono-png.png';
        this.imgSource = '/assets/imgs/tienda-online-icono-png.png';
        this.enableButton = true;
        this.userModel = navParams.get('item');
    }
    NegociosPage.prototype.ionViewDidLoad = function () { };
    NegociosPage.prototype.ionViewWillEnter = function () {
        this.getNegocios();
    };
    NegociosPage.prototype.ionViewWillLeave = function () { };
    NegociosPage.prototype.ionViewWillUnload = function () { };
    NegociosPage.prototype.agregarNegocio = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__nuevonegocio_nuevonegocio__["a" /* NuevonegocioPage */], { item: this.userModel });
    };
    NegociosPage.prototype.negocioDetalle = function (biz) {
        if (biz.clientid !== '') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: biz });
        }
        else {
            var toast = this.toastController.create({
                message: 'Agrega un negocio!',
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Ok'
            });
            toast.onDidDismiss(function () {
            });
            toast.present().then(function () {
            });
        }
    };
    NegociosPage.prototype.getNegocios = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.message
        });
        var toast = this.toastController.create({
            message: 'Connection error...',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Ok',
        });
        var alert = this.alertCtrl.create({
            title: 'Agrega un negocio!',
            subTitle: "Aun no tienes ninguno negocio registrado!",
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                    }
                }]
        });
        loader.present().then(function () {
            _this.api.obtenerNegocio(_this.userModel.clientid).subscribe(function (data) {
                if (data[0] !== null && data[0] !== undefined) {
                    _this.negocioModel = data[0];
                    _this.imgSourceNeg = data[0].fotografia !== '/assets/imgs/tienda-online-icono-png.png' ?
                        _this._sanitizer.bypassSecurityTrustResourceUrl(data[0].fotografia) : _this.imgSourceNeg;
                    _this.imgSource = data[0].fotografia2 !== '/assets/imgs/tienda-online-icono-png.png' ?
                        _this._sanitizer.bypassSecurityTrustResourceUrl(data[0].fotografia2) : _this.imgSource;
                    if (data.length == 0) {
                        _this.enableButton = true;
                    }
                    else {
                        _this.enableButton = false;
                    }
                }
                else {
                    alert.present().then(function () {
                    });
                }
            }, function (error) {
                console.log(error);
            });
            loader.dismiss();
        });
    };
    NegociosPage.prototype.borrar = function (bzz) {
    };
    NegociosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-negocios',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocios/negocios.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Listado de negocios : {{userModel.nombreUsuario}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n    <div class="user">\n        <img class="imgUser" [src]="imgSource">\n        <h2 class="nomCliente">{{userModel.apellidoPaterno}} {{userModel.apellidoMaterno}} {{userModel.nombre}}</h2>\n    </div>\n\n   <h2 class="titNeg">Mi Negocio</h2> \n  <ion-list>\n    <!-- <ion-item *ngFor="let biz of negocioModel" class="contNeg" (click)="negocioDetalle(biz)"> -->\n    <ion-item class="contNeg" (click)="negocioDetalle(negocioModel)">\n        <ion-thumbnail item-start class="logo">\n            <img [src]="imgSourceNeg">\n          </ion-thumbnail>\n          <h2 class="nombreNeg">{{negocioModel.nombre}}</h2>\n          <div class="contenedorEstrellas">\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n              <ion-icon class="estrella" name=\'star\'></ion-icon>\n            </div>\n      </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom (click)="agregarNegocio($event)">\n      <button *ngIf="enableButton" ion-fab ><ion-icon class="more" name="add"></ion-icon></button>\n  </ion-fab> \n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/negocios/negocios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_elstorapi_elstorapi__["a" /* ElstorapiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], NegociosPage);
    return NegociosPage;
}());

//# sourceMappingURL=negocios.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());

//# sourceMappingURL=password-validator.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fireBaseConfig; });
var fireBaseConfig = {
    fire: {
        apiKey: "AIzaSyBBpfZ5-RiG2fGwpWFCSimR2CFtXXnTGJI",
        authDomain: "el-estor.firebaseapp.com",
        databaseURL: "https://el-estor.firebaseio.com",
        projectId: "el-estor",
        storageBucket: "el-estor.appspot.com",
        messagingSenderId: "524940257833",
        appId: "1:524940257833:web:c54ca1c9550dc4c9"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__negocio_detalle_negocio_detalle__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











// @IonicPage()
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams, _sanitizer, afdb, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._sanitizer = _sanitizer;
        this.afdb = afdb;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_1__models_model__["c" /* User */]();
        this.userModel = navParams.get('item');
        // this.imgSource = this.userModel.fotografia !=='/assets/imgs/user.png' ? 
        //                   this._sanitizer.bypassSecurityTrustResourceUrl(this.userModel.fotografia): this.imgSource;
        // // this.userModel.fotografia = this.userModel.fotografia !== ""? 'data:image/jpeg;base64,' + this.userModel.fotografia: this.userModel.fotografia; 
        // // this.imgSource = this.userModel.fotografia != ""? this.userModel.fotografia : this.imgSource;
        // console.log(this.userModel);
        // this.afdb.list("pedidos/53").snapshotChanges().subscribe(data=>{
        //   data.map(data=>{
        //     let info = data.payload.val();
        //     this.presentModal(info);
        //   });
        // });
    }
    // presentModal(data) {
    //   const modal = this.modalCtrl.create(ModalPedidoPage,{
    //     data: data
    //   },
    //   {
    //     cssClass: 'loading',
    //     showBackdrop: true
    //     });
    //   modal.present();
    // }
    InicioPage.prototype.ionViewDidLoad = function () { };
    InicioPage.prototype.ionViewWillEnter = function () {
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.userModel.fotografia);
    };
    InicioPage.prototype.ionViewWillLeave = function () { };
    InicioPage.prototype.ionViewWillUnload = function () { };
    InicioPage.prototype.verPerfil = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */], { item: this.userModel });
    };
    InicioPage.prototype.verPedidos = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__["a" /* PedidosPage */], { item: this.userModel });
    };
    InicioPage.prototype.verNegocios = function ($event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__negocio_detalle_negocio_detalle__["a" /* NegocioDetallePage */], { item: this.userModel });
    };
    InicioPage.prototype.cerrarSesion = function ($event) {
        this.remove('usuario');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    InicioPage.prototype.remove = function (settingName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("setting:" + settingName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/inicio/inicio.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Bienvenido  a tu perfil {{userModel.nombreUsuario}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="user">\n        <img class="imgUser" [src]="fotografia" onError="this.src=\'/assets/imgs/user.png\'">\n        <h2 class="nomCliente">{{userModel.apellidoPaterno}} {{userModel.apellidoMaterno}} {{userModel.nombre}}</h2>\n      </div>\n<h2>Opciones del Menú</h2>\n  <ion-list>\n      <ion-item class="opcion" (click)="verPerfil($event)">\n          <ion-thumbnail item-start>\n            <img  class="imgUser" [src]="fotografia" >\n          </ion-thumbnail>\n          <h2>Mi Perfil</h2>\n        </ion-item>\n        <ion-item class="opcion" (click)="verPedidos($event)">\n            <ion-thumbnail item-start>\n              <img src="/assets/imgs/tienda-online-icono-png.png">\n            </ion-thumbnail>\n            <h2>Mis Pedidos</h2>\n          </ion-item>\n          <ion-item class="opcion" (click)="verNegocios($event)">\n              <ion-thumbnail item-start>\n                <img src="/assets/imgs/iconos-formas-de-envio-2.png">\n              </ion-thumbnail>\n              <h2>Mi Negocio</h2>\n            </ion-item> \n            <ion-item class="opcion">\n              <button ion-button full color="danger" (click)="cerrarSesion()" >\n                  Cerrar sesion\n                </button>\n            </ion-item> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/miguelvazquez/Documents/ELESTOR/el.estor.mobile-app/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map