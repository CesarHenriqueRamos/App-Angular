import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'user', component: UsersComponent},
  {path:'user/create', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
