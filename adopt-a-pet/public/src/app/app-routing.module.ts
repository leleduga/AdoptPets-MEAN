import { AppComponent } from './app.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'app',component: AppComponent },
  { path: 'new-pet',component: NewPetComponent },
  { path: 'pet-detail/:id', component: PetDetailComponent },
  { path: 'edit-detail/:id', component: EditPetComponent },  
  { path: '', pathMatch: 'full', redirectTo: '/app' }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
