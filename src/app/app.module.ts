import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { MissionComponent } from './mission';


@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
