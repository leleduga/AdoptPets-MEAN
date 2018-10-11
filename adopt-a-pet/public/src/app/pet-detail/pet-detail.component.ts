import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input() pets;
  showEditForm = false;
  selectedPet = undefined;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  selectPet(petObject){
    this.selectedPet = petObject;
    this.showEditForm = true;
  }
  delete(petObject){
    let tempObservable = this._httpService.delete(petObject);
    tempObservable.subscribe((data)=>{
      console.log(data);
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
