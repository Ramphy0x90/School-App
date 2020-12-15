import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GradesModule} from "./container/grades/grades.module";
import { FormsModule } from '@angular/forms';
import {MenuComponent} from './component/menu/menu.component';
import {LoginModule} from "./container/login/login.module";
import {CommonModule} from "@angular/common";
import {HomeworkModule} from "./container/homework/homework.module";
import {SubjectModule} from './container/subject/subject.module';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { AvgFormatPipe } from './pipes/avg-format.pipe';

@NgModule({
  declarations: [AppComponent, MenuComponent, AvgFormatPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, GradesModule, FormsModule, LoginModule, CommonModule, HomeworkModule, SubjectModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SQLitePorter,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
