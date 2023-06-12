import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from "./components/users/users.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { FormcreateComponent } from "./components/formcreate/formcreate.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { FormUpdateComponent } from "./components/form-update/form-update.component";

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'create', component: FormcreateComponent},
  {path:'user/:id', component:UserDetailComponent},
  {path:'users/:id', component: FormUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
