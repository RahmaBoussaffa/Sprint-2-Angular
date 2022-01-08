import { Component, OnInit } from '@angular/core';
import { Photo } from '../model/photo.model';
import { AuthService } from '../services/auth.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  photos : Photo[];
  nomPhoto : string;
  constructor(private photoService : PhotoService, public authService : AuthService ) { }
  
  ngOnInit(): void {
    this.photoService.listePhotos().subscribe(data => {
      this.photos = data;
    });
  }

}
