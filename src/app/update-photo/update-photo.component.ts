import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../model/photo.model';
import { Photographe } from '../model/photographe.model';

@Component({
selector: 'app-update-photo',
templateUrl: './update-photo.component.html',
styles: []
})
export class UpdatePhotoComponent implements OnInit {

currentPhoto = new Photo();
photographes : Photographe[];
newPhotographe : Photographe;
idPhot : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.consulterPhoto(this.activatedRoute.snapshot.params.id).subscribe( phot =>{ 
      this.currentPhoto = phot;
      this.idPhot = phot.photographe.idPhot; 
    } ) ;

    this.photoService.listePhotographes().subscribe( data => {
      this.photographes = data;
    });
 
  }

  onChange(){
    this.photoService.consulterPhotographe(this.idPhot).subscribe(data => {
      this.newPhotographe = data;
      console.log(this.newPhotographe);
    });
  }

  updatePhoto(){ 
    if (this.currentPhoto.photographe.idPhot != this.idPhot){
      this.currentPhoto.photographe = this.newPhotographe;
      console.log(this.currentPhoto.photographe);
    }
    this.photoService.updatePhoto(this.currentPhoto).subscribe(phot => {
      this.router.navigate(['photos']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }
}