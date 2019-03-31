import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "../../../node_modules/angular-6-social-login";

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("286509065573957")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("903533449006-ko1g1tecuhod01lq35nsofq905obd8m2.apps.googleusercontent.com")
        },
          // {
          //   id: LinkedinLoginProvider.PROVIDER_ID,
          //   provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          // },
      ]
  )
  return config;
}
// /angular-6-social-login

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class SingInModule { }
