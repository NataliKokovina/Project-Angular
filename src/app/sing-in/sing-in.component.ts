import { Component, OnInit } from '@angular/core';
import {SingIn} from './sing-in';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from '../../../node_modules/angular-6-social-login';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  singUp: boolean = false;
  public user: SingIn;

  singUpClick(){
    this.singUp = !this.singUp;
    console.log(this.singUp);
   }

  constructor(private socialAuthService: AuthService) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.user.img = userData.image;
        this.user.email=userData.email;
      }
    );
  }

  ngOnInit() {
    this.user = {
      email: "",
      password: "",
      img: "",
    };

  }

}


// https://medium.com/@sarat.e99/hi-martin-please-make-sure-that-you-have-added-the-code-to-download-facebook-js-sdk-on-load-b4708490c5e2
// https://www.npmjs.com/package/angular-6-social-login
// https://developers.facebook.com/apps/286509065573957/fb-login/quickstart/
// https://console.developers.google.com/apis/credentials?project=daikhatu-1554050166278
