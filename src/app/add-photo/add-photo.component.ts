import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo} from '../model/photo.model';
import { Photographe } from '../model/photographe.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html'
})
export class AddPhotoComponent implements OnInit {

  newPhoto = new Photo();
  newIdPhot: number;
  photographers : Photographe[];
  newPhotographer = new Photographe();
  message :string;

  constructor(private photoService : PhotoService,private router:Router) {}

  ngOnInit(): void {
    this.photoService.listePhotographes().subscribe(data => {
      this.photographers = data;
      console.log(this.photographers);
    });
  }

  addPhoto() {
    this.newPhotographer = this.photographers.find(p => p.idPhot == this.newIdPhot);
    this.newPhoto.photographe = this.newPhotographer;
    this.photoService.ajouterPhoto(this.newPhoto).subscribe(phot => {
      console.log(phot);
    });

    this.router.navigate(['photos']);
  }

}