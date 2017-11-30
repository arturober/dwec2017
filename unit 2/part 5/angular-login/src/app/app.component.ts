import { Component } from '@angular/core';

@Component({
  selector: 'al-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'al';

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    // Send this token to your server for register / login
    console.log(user.getAuthResponse(true).access_token);
    console.log(user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getEmail());
    console.log(user.getBasicProfile().getImageUrl());
  }

  loggedFacebook(resp: FB.LoginStatusResponse) {
    // Send this to your server
    console.log(resp.authResponse.accessToken);
  }

  showError(error) {
    console.error(error);
  }
}
