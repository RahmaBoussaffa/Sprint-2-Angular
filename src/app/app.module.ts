import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { FormsModule } from '@angular/forms';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParPhotographeComponent } from './recherche-par-photographe/recherche-par-photographe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotosComponent,
    AddPhotoComponent,
    UpdatePhotoComponent,
    RechercheParPhotographeComponent,
    RechercheParNomComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
