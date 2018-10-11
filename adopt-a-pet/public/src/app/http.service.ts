import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  newPet(petObject){
      return this._http.post('/new-pet', petObject);
    }
  indexPets(){
    return this._http.get('/pets');
    }
  getAllPets(){
    return this._http.get('/pets')
  }  
  updatePet(petObject){
    return this._http.post(`/pets/${petObject._id}/update`, petObject);
  }
  delete(petObject){
    return this._http.post(`/pets/${petObject._id}/delete`, petObject);
  }
}
