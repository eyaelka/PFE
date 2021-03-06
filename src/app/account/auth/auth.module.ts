import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgOtpInputModule } from  'ng-otp-input';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { WebcamModule } from 'ngx-webcam';


import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UIModule } from '../../shared/ui/ui.module';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';

import { AuthRoutingModule } from './auth-routing';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { KycComponent } from './kyc/kyc.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { ConfirmmailComponent } from './confirmmail/confirmmail.component';
import { MerchantformComponent } from './merchantform/merchantform.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import { LoginFeaturesComponent } from './login2/login-features/login-features.component';
import { CentralbankformComponent } from './centralbankform/centralbankform.component';


@NgModule({
  declarations: [Login2Component, PasswordresetComponent, Register2Component, Recoverpwd2Component, KycComponent, VerifyemailComponent, ConfirmmailComponent, MerchantformComponent, StartPageComponent, LoginComponent, LoginFeaturesComponent, CentralbankformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    UIModule,
    AuthRoutingModule,
    CarouselModule,
    NgOtpInputModule,
    ArchwizardModule,
    DropzoneModule,
    WebcamModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class AuthModule { }
