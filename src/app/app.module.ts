import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import { LandingPageComponent } from './components/landing-page/landing-page.component';



const routes: Routes = [

  
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing-page', component: LandingPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [RouterModule],

  declarations: [
    AppComponent,


  ],
  providers: [
    provideAnimationsAsync(),
    ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

