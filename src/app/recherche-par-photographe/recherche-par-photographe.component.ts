import { Component, OnInit } from '@angular/core';
import { Photo } from '../model/photo.model';
import { Photographe } from '../model/photographe.model';
import { AuthService } from '../services/auth.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-recherche-par-photographe',
  templateUrl: './recherche-par-photographe.component.html',
  styles: [
  ]
})
export class RechercheParPhotographeComponent implements OnInit {

  photos : Photo[];
  photosRecherche:Photo[];
  photographes : Photographe[];
  idPhot : number;


  constructor(private photoService : PhotoService, public authService :AuthService ) { }

  ngOnInit(): void {
    this.photoService.listePhotographes().subscribe(data => {
      this.photographes = data;
      console.log(this.photographes);
    });
    this.photoService.listePhotos().subscribe(data => {
      this.photos = data;
      this.photosRecherche = data;
      console.log(this.photos);
    });
  }

  onChange(){
    console.log(this.idPhot);
    this.photosRecherche = [];
    this.photos.forEach((cur, index) => {
      if(this.idPhot == cur.photographe.idPhot){
        console.log("cur = "+cur);
        this.photosRecherche.push(cur);
      }
    });
  }
}
