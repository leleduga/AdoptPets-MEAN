import { Component,OnInit} from '@angular/core';
import {HttpService} from './http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newPet: any;
  pets = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
}
getAllPets(){
  let tempObservable = this._httpService.indexPets();
  tempObservable.subscribe((responseData: any)=>{
    this.pets = responseData;
  })
}
ngOnInit(){
  this._route.params.subscribe((params: Params)=>{})
  this.getPetsFromService();
  this.pets= [];
}
getPetsFromService(){
  let observable = this._httpService.getAllPets();
  observable.subscribe(data => {
    console.log("Got our Pets!", data)
    this.pets = data['pets'];
});
}
}
