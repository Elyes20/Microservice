import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompagnieDetailsComponent } from './compagnie-details/compagnie-details.component';
import { CompagnieListComponent } from './compagnie-list/compagnie-list.component';
import { CreateCompagnieComponent } from './create-compagnie/create-compagnie.component';
import { RegisterAvionComponent } from './register-avion/register-avion.component';
import { SdAvionComponent } from './sd-avion/sd-avion.component';

const routes: Routes = [
  {path:"register",component:RegisterAvionComponent},
  {path:"search",component:SdAvionComponent},
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"compagnies",component: CompagnieListComponent},
  {path:'addC',component: CreateCompagnieComponent},
  {path:'details/:id',component:CompagnieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
