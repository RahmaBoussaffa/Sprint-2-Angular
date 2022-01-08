import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { RechercheParPhotographeComponent } from './recherche-par-photographe/recherche-par-photographe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PhotosGuard } from './photos.guard';
const routes: Routes = [
  {path: "photos", component : PhotosComponent},
  {path: "add-photo", component : AddPhotoComponent, canActivate : [PhotosGuard] } ,
  {path: "", redirectTo: "photos", pathMatch: "full" } ,
  {path: "updatePhoto/:id", component: UpdatePhotoComponent},
  {path: "rechercheParPhotographe", component : RechercheParPhotographeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "login", component : LoginComponent},
  {path: "app-forbidden", component : ForbiddenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
