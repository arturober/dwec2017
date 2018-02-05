import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { IUser } from '../../models/user';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: IUser;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public usersService: UsersProvider,
    public toast: ToastController) {}

  ionViewDidLoad() {
      this.usersService.getMyProfile()
        .subscribe(
          user => this.user = user
        );
  }

  openChangePass() {
    let modal = this.modalCtrl.create('ChangePasswordPage', {name: this.user.name});
    modal.onDidDismiss(data => {
      if(data.changed) this.showToast(3000, "Password updated successfully!");
    });
    modal.present();
  }

  private showToast(duration: number, message: string) {
    let toast = this.toast.create({
      duration,
      message
    });
    toast.present();
  }
}
