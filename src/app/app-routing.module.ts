import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { DetailComponent } from './Component/detail/detail.component';
import { HomeComponent } from './Component/home/home.component';
import { UpdateuserComponent } from './Component/updateuser/updateuser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: 'update/:id', component: UpdateuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
