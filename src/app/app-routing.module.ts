import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetComponent } from './reset/reset.component';
import { VerifyComponent } from './verify/verify.component';




const routes: Routes =[
{path:'Reg',component:RegistrationComponent},
{path:'',component:LoginComponent},
{path:'Dash',component:DashComponent},
{  path: "forgot",component: ForgotComponent
},{ path: "Logout",component: LogoutComponent}, 
{ path: "reset",component: ResetComponent}, 
{ path: "login",component: LoginComponent}, 
{ path: "verify",component: VerifyComponent}, 
];


@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
