import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  @Input() petToEdit = {name: '', type: '', description: '', skill: ''};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit(){
    let tempObservable = this._httpService.updatePet(this.petToEdit);
    tempObservable.subscribe((responseData)=>{
      console.log(responseData);
    })
  }

}