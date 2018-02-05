import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
  name: string;
  password: string;
  password2: string;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public userServ: UsersProvider,
    public toast: ToastController
  ) {
    this.name = navParams.get('name');
  }

  changePass() {
    if (this.password != this.password2) {
      this.showToast(3000, 'Passwords do not match!');
      return;
    }

    this.userServ
      .changePassword(this.password)
      .subscribe(
        ok => this.viewCtrl.dismiss({ changed: true }),
        error => this.showToast(3000, error)
      );
  }

  cancel() {
    this.viewCtrl.dismiss({ changed: false });
  }

  private showToast(duration: number, message: string) {
    let toast = this.toast.create({
      duration,
      message
    });
    toast.present();
  }
}
