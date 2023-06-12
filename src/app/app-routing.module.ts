import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChoosecourseComponent } from './choosecourse/choosecourse.component';
import { LoginComponent } from './login/login.component';
import { StudyMaterialComponent } from './study-material/study-material.component';


const routes: Routes = [
 
{
  path:'aboutus',
  component:AboutusComponent
},
{
  path:'choosecourse',
  component:ChoosecourseComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'studymaterial',
  component: StudyMaterialComponent
},
{
  path:'**',
  component: HomeComponent
},
// {
//   path:'contactus',
//   component: ContactUsComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
