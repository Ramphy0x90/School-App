import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {AlertComponent} from "../../component/alert/alert.component";
import {FingerprintComponent} from "../../component/fingerprint/fingerprint.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ LoginComponent, AlertComponent, FingerprintComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
