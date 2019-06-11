import { InicioPage } from './../inicio/inicio';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../models/model';

var usuario;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:User = new User();

  constructor(public navCtrl: NavController,
    public storage: Storage) {

  }

  ionViewDidLoad() {
  }
  ionViewWillEnter(){
    this.get('usuario'); 
  }
  ionViewWillLeave(){}
  ionViewWillUnload(){}
  goToLoginPage()
  {
    this.navCtrl.push(LoginPage);
  }
  goToRegisterPage()
  {
    this.navCtrl.push(RegisterPage)
  }

  public async get(settingName){
    return await this.storage.get(`setting:${ settingName }`).then((value) =>{
      usuario = value;
      if(usuario != null)
      {
        this.navCtrl.push(InicioPage, {item:usuario});
      }
    });;
  }
}
