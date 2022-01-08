import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../model/photo.model';
import { AuthService } from '../services/auth.service';
import { PhotoService } from '../services/photo.service';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
 
})
export class PhotosComponent implements OnInit {
  photos :Photo[]; 
  constructor(private photoService: PhotoService, private router : Router, public authService : AuthService) {
    
    }
   

  ngOnInit(): void {
    this.photoService.listePhotos().subscribe(phots => {console.log(phots);
      this.photos = phots;
      });
  }
  supprimerPhoto(p: Photo)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.photoService.supprimerPhoto(p.idPhoto).subscribe(() => {
console.log("photo supprimé");
this.SuprimerPhotoDuTableau(p);
});

}
SuprimerPhotoDuTableau(phot : Photo) {
  this.photos.forEach((cur, index) => {
  if(phot.idPhoto=== cur.idPhoto) {
  this.photos.splice(index, 1);
  }
  });
  }
  


}
