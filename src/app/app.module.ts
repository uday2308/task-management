import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './components/group/group.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { JoingroupComponent } from './components/joingroup/joingroup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    PassResetComponent,
    HomeComponent,
    GroupComponent,
    TasksComponent,
    GroupMembersComponent,
    JoingroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
