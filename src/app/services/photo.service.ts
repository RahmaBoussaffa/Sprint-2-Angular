import { Injectable } from '@angular/core';
import { Photo } from '../model/photo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photographe } from '../model/photographe.model';
import { AuthService } from './auth.service';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class PhotoService {
  apiURL: string = 'http://localhost:8090/photos/api';
photos : Photo[]; 
photo : Photo;
photographes : Photographe[] ; 
constructor(private http : HttpClient, private authService: AuthService) {

}
listePhotos():Observable<Photo[]> {
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
  return this.http.get<Photo[]>(this.apiURL+"/all", {headers:httpHeaders});
}

listePhotographes():Observable<Photographe[]> {
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
  return this.http.get<Photographe[]>(this.apiURL+"/photographes", {headers:httpHeaders});
}

ajouterPhoto( phot: Photo): Observable<Photo>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
  return this.http.post<Photo>(this.apiURL, phot, {headers:httpHeaders});
}

supprimerPhoto( id : number ){
  //supprimer le produit prod du tableau produits
  const url = `${this.apiURL}/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
  return this.http.delete(url, {headers:httpHeaders});
}

consulterPhoto(id:number): Observable<Photo> {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.get<Photo>(url, {headers:httpHeaders});
    
}

consulterPhotographe(id:number): Observable<Photographe>{
  const url = `${this.apiURL}/photographes/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
  return this.http.get<Photographe>(url, {headers:httpHeaders});
}
    
trierPhotos(){
    this.photos = this.photos.sort((n1,n2) => {
      if (n1.idPhoto > n2.idPhoto) {
        return 1;
      }
      if (n1.idPhoto < n2.idPhoto) {
        return -1;
      }
      return 0;
    });
 }
 updatePhoto(p:Photo) :  Observable<Photo>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt});
    return this.http.put<Photo>(this.apiURL, p, {headers:httpHeaders});
  }

}
