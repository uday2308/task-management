import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { GroupComponent } from './components/group/group.component';

const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:"reset", component: PassResetComponent},
  {path:"home", component: HomeComponent},
  {path:"group", component: GroupComponent},
  {path:"tasks", component: TasksComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
