import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;

  constructor(private navCtrl : NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navigateToPage(pageName: string){
    pageName ==='TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }


}
