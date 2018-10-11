import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet = {name: '', type: '', description: '', skill: ''};
  constructor(private _httpService: HttpService) { }
  pets = [];

  ngOnInit() {
    this.getAllPets();
  }  
  onSubmit(){
    let tempObservable = this._httpService.newPet(this.newPet);
    tempObservable.subscribe((responseData)=>{
      console.log(responseData);
      this.newPet = {name: '', type: '', description: '', skill: ''};
      this.getAllPets();
  })
}
getAllPets(){
  let tempObservable = this._httpService.indexPets();
  tempObservable.subscribe((responseData: any)=>{
    this.pets = responseData;
  })
}
}

